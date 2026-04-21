const INVALID_STAT_POINTS_ERROR =
  "Stat points must be an integer greater than or equal to 0.";

const INITIAL_TOTAL_STARTING_STAT_POINTS = 5;
const INITIAL_FORCED_HP_STAT_POINTS = 2;
const INITIAL_FREE_STARTING_STAT_POINTS = 3;

export type StatPoints = number & {
  readonly __brand: "StatPoints";
};

export function createStatPoints(value: number): StatPoints {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(INVALID_STAT_POINTS_ERROR);
  }

  return value as StatPoints;
}

export function createInitialTotalStartingStatPoints(): StatPoints {
  return createStatPoints(INITIAL_TOTAL_STARTING_STAT_POINTS);
}

export function createInitialForcedHpStatPoints(): StatPoints {
  return createStatPoints(INITIAL_FORCED_HP_STAT_POINTS);
}

export function createInitialFreeStartingStatPoints(): StatPoints {
  return createStatPoints(INITIAL_FREE_STARTING_STAT_POINTS);
}