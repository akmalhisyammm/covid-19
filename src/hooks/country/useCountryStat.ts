import useSWR from 'swr';

import { GLOBAL_API_URL } from 'constants/api';
import { fetcher } from 'utils/fetcher';

export const useCountryStat = (countryCode?: string) => {
  const { data, error } = useSWR(
    countryCode ? `${GLOBAL_API_URL}/countries/${countryCode}` : null,
    fetcher
  );

  return { data, isLoading: !error && !data, isError: !!error };
};
