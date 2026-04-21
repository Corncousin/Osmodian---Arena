const EMPTY_PLAYER_ID_ERROR = "Player id must be a non-empty string.";

export type PlayerId = string & {
  readonly __brand: "PlayerId";
};

export function createPlayerId(value: string): PlayerId {
  const normalizedValue = value.trim();

  if (normalizedValue.length === 0) {
    throw new Error(EMPTY_PLAYER_ID_ERROR);
  }

  return normalizedValue as PlayerId;
}
