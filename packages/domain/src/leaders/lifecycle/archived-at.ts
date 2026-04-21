const INVALID_ARCHIVED_AT_ERROR = "Archived at must be a valid date.";

export type ArchivedAt = Date & {
  readonly __brand: "ArchivedAt";
};

export function createArchivedAt(value: Date): ArchivedAt {
  if (Number.isNaN(value.getTime())) {
    throw new Error(INVALID_ARCHIVED_AT_ERROR);
  }

  return value as ArchivedAt;
}
