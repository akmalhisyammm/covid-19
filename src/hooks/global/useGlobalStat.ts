import useSWR from 'swr';

import { GLOBAL_API_URL } from 'constants/api';
import { fetcher } from 'utils/fetcher';

export const useGlobalStat = () => {
  const { data, error } = useSWR(`${GLOBAL_API_URL}`, fetcher);

  return { data, isLoading: !error && !data, isError: !!error };
};
