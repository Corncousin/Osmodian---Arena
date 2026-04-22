import type { Leader } from "../leader.entity.js";

export type UpdateLeaderStatsFailureReason =
  | "invalid_player_id"
  | "invalid_leader_id"
  | "invalid_final_stats"
  | "leader_not_found"
  | "leader_not_owned_by_player"
  | "leader_archived"
  | "stat_decrease_not_allowed"
  | "stat_point_mismatch";

export type UpdateLeaderStatsSuccessResult = {
  readonly ok: true;
  readonly leader: Leader;
};

export type UpdateLeaderStatsFailureResult = {
  readonly ok: false;
  readonly reason: UpdateLeaderStatsFailureReason;
};

export type UpdateLeaderStatsResult =
  | UpdateLeaderStatsSuccessResult
  | UpdateLeaderStatsFailureResult;

export function createUpdateLeaderStatsSuccessResult(
  leader: Leader,
): UpdateLeaderStatsSuccessResult {
  return {
    ok: true,
    leader,
  };
}

export function createUpdateLeaderStatsFailureResult(
  reason: UpdateLeaderStatsFailureReason,
): UpdateLeaderStatsFailureResult {
  return {
    ok: false,
    reason,
  };
}
