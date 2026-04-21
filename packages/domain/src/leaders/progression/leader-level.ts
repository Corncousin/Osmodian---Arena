const INVALID_LEADER_LEVEL_ERROR =
  "Leader level must be an integer greater than or equal to 0.";

const INITIAL_LEADER_LEVEL = 0;

export type LeaderLevel = number & {
  readonly __brand: "LeaderLevel";
};

export function createLeaderLevel(value: number): LeaderLevel {
  if (!Number.isInteger(value) || value < INITIAL_LEADER_LEVEL) {
    throw new Error(INVALID_LEADER_LEVEL_ERROR);
  }

  return value as LeaderLevel;
}

export function createInitialLeaderLevel(): LeaderLevel {
  return createLeaderLevel(INITIAL_LEADER_LEVEL);
}