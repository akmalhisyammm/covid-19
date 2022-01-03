export interface IndonesiaDailyStat {
  positif: string;
  dirawat: string;
  sembuh: string;
  meninggal: string;
  tanggal: string;
}

export interface SWRIndonesiaDailyStat {
  data: IndonesiaDailyStat[];
  isLoading: boolean;
  isError: boolean;
}
