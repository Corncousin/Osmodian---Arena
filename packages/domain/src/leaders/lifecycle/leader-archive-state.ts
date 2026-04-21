import type { ArchivedAt } from "./archived-at.js";

export type LeaderArchiveState = {
  readonly archivedAt: ArchivedAt | null;
};

export function createActiveLeaderArchiveState(): LeaderArchiveState {
  return {
    archivedAt: null,
  };
}

export function createArchivedLeaderArchiveState(
  archivedAt: ArchivedAt,
): LeaderArchiveState {
  return {
    archivedAt,
  };
}

export function isLeaderArchived(state: LeaderArchiveState): boolean {
  return state.archivedAt !== null;
}