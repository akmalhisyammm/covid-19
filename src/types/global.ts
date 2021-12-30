export interface GlobalStat {
  confirmed: { value: number };
  recovered: { value: number };
  deaths: { value: number };
  lastUpdate: string;
}

export interface SWRGlobalStat {
  data: GlobalStat;
  isLoading: boolean;
  isError: boolean;
}
