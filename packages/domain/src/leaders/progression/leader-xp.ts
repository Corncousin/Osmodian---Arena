const INVALID_LEADER_XP_ERROR =
  "Leader xp must be an integer greater than or equal to 0.";

const INITIAL_LEADER_XP = 0;

export type LeaderXp = number & {
  readonly __brand: "LeaderXp";
};

export function createLeaderXp(value: number): LeaderXp {
  if (!Number.isInteger(value) || value < INITIAL_LEADER_XP) {
    throw new Error(INVALID_LEADER_XP_ERROR);
  }

  return value as LeaderXp;
}

export function createInitialLeaderXp(): LeaderXp {
  return createLeaderXp(INITIAL_LEADER_XP);
}