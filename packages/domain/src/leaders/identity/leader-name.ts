const LEADER_NAME_MIN_LENGTH = 3;
const LEADER_NAME_MAX_LENGTH = 24;
const LEADER_NAME_PATTERN = /^[A-Za-z0-9 _'-]+$/;

const INVALID_LEADER_NAME_ERROR =
  "Leader name must be 3-24 characters and use only letters, numbers, spaces, apostrophes, hyphens, or underscores.";

export type LeaderName = string & {
  readonly __brand: "LeaderName";
};

export function createLeaderName(value: string): LeaderName {
  const normalizedValue = value.trim();

  if (!isValidLeaderName(normalizedValue)) {
    throw new Error(INVALID_LEADER_NAME_ERROR);
  }

  return normalizedValue as LeaderName;
}

export function isValidLeaderName(value: string): boolean {
  return (
    value.length >= LEADER_NAME_MIN_LENGTH &&
    value.length <= LEADER_NAME_MAX_LENGTH &&
    LEADER_NAME_PATTERN.test(value)
  );
}