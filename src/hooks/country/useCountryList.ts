import useSWR from 'swr';

import { GLOBAL_API_URL } from 'constants/api';
import { fetcher } from 'utils/fetcher';

export const useCountryList = () => {
  const { data, error } = useSWR(`${GLOBAL_API_URL}/countries`, fetcher);

  return { data, isLoading: !error && !data, isError: !!error };
};
