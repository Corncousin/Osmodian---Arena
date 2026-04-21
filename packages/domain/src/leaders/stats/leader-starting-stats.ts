import {
  createInitialForcedHpStatPoints,
  createInitialFreeStartingStatPoints,
  type StatPoints,
} from "./stat-points.js";

export type LeaderStartingStats = {
  readonly hp: StatPoints;
  readonly freeStatPoints: StatPoints;
};

export function createInitialLeaderStartingStats(): LeaderStartingStats {
  return {
    hp: createInitialForcedHpStatPoints(),
    freeStatPoints: createInitialFreeStartingStatPoints(),
  };
}