const EMPTY_TRIBE_ID_ERROR = "Tribe id must be a non-empty string.";

export type TribeId = string & {
  readonly __brand: "TribeId";
};

export function createTribeId(value: string): TribeId {
  const normalizedValue = value.trim();

  if (normalizedValue.length === 0) {
    throw new Error(EMPTY_TRIBE_ID_ERROR);
  }

  return normalizedValue as TribeId;
}
