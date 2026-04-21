const INVALID_LEADER_BRACKET_ERROR =
  "Leader bracket must be an integer greater than or equal to 1.";

const FIRST_LEADER_BRACKET = 1;

export type LeaderBracket = number & {
  readonly __brand: "LeaderBracket";
};

export function createLeaderBracket(value: number): LeaderBracket {
  if (!Number.isInteger(value) || value < FIRST_LEADER_BRACKET) {
    throw new Error(INVALID_LEADER_BRACKET_ERROR);
  }

  return value as LeaderBracket;
}

export function createInitialLeaderBracket(): LeaderBracket {
  return createLeaderBracket(FIRST_LEADER_BRACKET);
}
