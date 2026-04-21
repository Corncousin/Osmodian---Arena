import {
  createInitialForcedHpStatPoints,
  createInitialFreeStartingStatPoints,
  createStatPoints,
  type StatPoints,
} from "./stat-points.js";

export type LeaderStats = {
  readonly hp: StatPoints;
  readonly str: StatPoints;
  readonly dex: StatPoints;
  readonly lck: StatPoints;
  readonly unspentStatPoints: StatPoints;
};

export type CreateLeaderStatsInput = {
  readonly hp: number;
  readonly str: number;
  readonly dex: number;
  readonly lck: number;
  readonly unspentStatPoints: number;
};

export function createLeaderStats(input: CreateLeaderStatsInput): LeaderStats {
  return {
    hp: createStatPoints(input.hp),
    str: createStatPoints(input.str),
    dex: createStatPoints(input.dex),
    lck: createStatPoints(input.lck),
    unspentStatPoints: createStatPoints(input.unspentStatPoints),
  };
}

export function createInitialLeaderStats(): LeaderStats {
  return createLeaderStats({
    hp: createInitialForcedHpStatPoints(),
    str: 0,
    dex: 0,
    lck: 0,
    unspentStatPoints: createInitialFreeStartingStatPoints(),
  });
}
