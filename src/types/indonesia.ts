export interface IndonesiaTotalStat {
  positif: number;
  dirawat: number;
  sembuh: number;
  meninggal: number;
  lastUpdate: string;
}

export interface IndonesiaAdditionStat {
  positif: number;
  dirawat: number;
  sembuh: number;
  meninggal: number;
  tanggal: string;
  created: string;
}

export interface IndonesiaStat {
  total: IndonesiaTotalStat;
  penambahan: IndonesiaAdditionStat;
}

export interface IndonesiaDailyStat {
  positif: number;
  dirawat: number;
  sembuh: number;
  meninggal: number;
  tanggal: string;
}

export interface SWRIndonesiaStat {
  data: IndonesiaStat;
  isLoading: boolean;
  isError: boolean;
}

export interface SWRIndonesiaDailyStat {
  data: IndonesiaDailyStat[];
  isLoading: boolean;
  isError: boolean;
}
