export interface CountryList {
  countries: { name: string }[];
}

export interface CountryStat {
  confirmed: { value: number };
  recovered: { value: number };
  deaths: { value: number };
  lastUpdate: string;
}

export interface SWRCountryList {
  data: CountryList;
  isLoading: boolean;
  isError: boolean;
}

export interface SWRCountryStat {
  data: CountryStat;
  isLoading: boolean;
  isError: boolean;
}

export interface SelectCountryList {
  value: string;
  label: string;
}
