import { createLeaderId, type LeaderId } from "../identity/leader-id.js";
import { createPlayerId, type PlayerId } from "../identity/player-id.js";
import type { Leader } from "../leader.entity.js";
import { isLeaderArchived } from "../lifecycle/leader-archive-state.js";
import { createLeaderStats, type LeaderStats } from "../stats/leader-stats.js";
import type { UpdateLeaderStatsCommand } from "./update-leader-stats.command.js";
import {
  createUpdateLeaderStatsFailureResult,
  createUpdateLeaderStatsSuccessResult,
  type UpdateLeaderStatsResult,
} from "./update-leader-stats.result.js";

export type UpdateLeaderStatsDependencies = {
  readonly getLeaderById: (leaderId: LeaderId) => Promise<Leader | null>;
  readonly saveLeader: (leader: Leader) => Promise<Leader>;
};

export async function updateLeaderStats(
  command: UpdateLeaderStatsCommand,
  dependencies: UpdateLeaderStatsDependencies,
): Promise<UpdateLeaderStatsResult> {
  let playerId: PlayerId;

  try {
    playerId = createPlayerId(command.playerId);
  } catch {
    return createUpdateLeaderStatsFailureResult("invalid_player_id");
  }

  let leaderId: LeaderId;

  try {
    leaderId = createLeaderId(command.leaderId);
  } catch {
    return createUpdateLeaderStatsFailureResult("invalid_leader_id");
  }

  let finalStats: LeaderStats;

  try {
    finalStats = createLeaderStats(command.finalStats);
  } catch {
    return createUpdateLeaderStatsFailureResult("invalid_final_stats");
  }

  const leader = await dependencies.getLeaderById(leaderId);

  if (leader === null) {
    return createUpdateLeaderStatsFailureResult("leader_not_found");
  }

  if (leader.playerId !== playerId) {
    return createUpdateLeaderStatsFailureResult("leader_not_owned_by_player");
  }

  if (isLeaderArchived(leader.archiveState)) {
    return createUpdateLeaderStatsFailureResult("leader_archived");
  }

  if (hasAnyStatDecrease(leader.stats, finalStats)) {
    return createUpdateLeaderStatsFailureResult("stat_decrease_not_allowed");
  }

  if (!isValidNormalAllocation(leader.stats, finalStats)) {
    return createUpdateLeaderStatsFailureResult("stat_point_mismatch");
  }

  const updatedLeader: Leader = {
    ...leader,
    stats: finalStats,
  };

  const savedLeader = await dependencies.saveLeader(updatedLeader);

  return createUpdateLeaderStatsSuccessResult(savedLeader);
}

function hasAnyStatDecrease(
  currentStats: LeaderStats,
  nextStats: LeaderStats,
): boolean {
  return (
    nextStats.hp < currentStats.hp ||
    nextStats.str < currentStats.str ||
    nextStats.dex < currentStats.dex ||
    nextStats.lck < currentStats.lck ||
    nextStats.crt < currentStats.crt
  );
}

function isValidNormalAllocation(
  currentStats: LeaderStats,
  nextStats: LeaderStats,
): boolean {
  if (nextStats.unspentStatPoints > currentStats.unspentStatPoints) {
    return false;
  }

  const totalAllocatedIncrease =
    getIncrease(currentStats.hp, nextStats.hp) +
    getIncrease(currentStats.str, nextStats.str) +
    getIncrease(currentStats.dex, nextStats.dex) +
    getIncrease(currentStats.lck, nextStats.lck) +
    getIncrease(currentStats.crt, nextStats.crt);

  const spentPoints =
    currentStats.unspentStatPoints - nextStats.unspentStatPoints;

  return totalAllocatedIncrease === spentPoints;
}

function getIncrease(currentValue: number, nextValue: number): number {
  return nextValue - currentValue;
}
