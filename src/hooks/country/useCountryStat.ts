import useSWR from 'swr';
import { GLOBAL_API_URL } from 'constants/api';
import { fetcher } from 'utils/fetcher';

export const useCountryStat = (countryCode: string) => {
  const { data, error } = useSWR(`${GLOBAL_API_URL}/countries/${countryCode}`, fetcher);

  return { data, isLoading: !error && !data, isError: error };
};
