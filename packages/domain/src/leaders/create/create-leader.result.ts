import type { Leader } from "../leader.entity.js";

export type CreateLeaderFailureReason =
  | "invalid_player_id"
  | "invalid_tribe_id"
  | "invalid_leader_name"
  | "leader_limit_reached"
  | "leader_name_taken";

export type CreateLeaderSuccessResult = {
  readonly ok: true;
  readonly leader: Leader;
};

export type CreateLeaderFailureResult = {
  readonly ok: false;
  readonly reason: CreateLeaderFailureReason;
};

export type CreateLeaderResult =
  | CreateLeaderSuccessResult
  | CreateLeaderFailureResult;

export function createLeaderSuccessResult(
  leader: Leader,
): CreateLeaderSuccessResult {
  return {
    ok: true,
    leader,
  };
}

export function createLeaderFailureResult(
  reason: CreateLeaderFailureReason,
): CreateLeaderFailureResult {
  return {
    ok: false,
    reason,
  };
}
