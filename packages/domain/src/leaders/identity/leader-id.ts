const EMPTY_LEADER_ID_ERROR = "Leader id must be a non-empty string.";

export type LeaderId = string & {
  readonly __brand: "LeaderId";
};

export function createLeaderId(value: string): LeaderId {
  const normalizedValue = value.trim();

  if (normalizedValue.length === 0) {
    throw new Error(EMPTY_LEADER_ID_ERROR);
  }

  return normalizedValue as LeaderId;
}
