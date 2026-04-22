export type UpdateLeaderStatsCommand = {
  readonly playerId: string;
  readonly leaderId: string;
  readonly finalStats: {
    readonly hp: number;
    readonly str: number;
    readonly dex: number;
    readonly lck: number;
    readonly crt: number;
    readonly unspentStatPoints: number;
  };
};
