import useSWR from 'swr';

import { INDONESIA_API_URL } from 'constants/api';
import { fetcher } from 'utils/fetcher';

export const useIndonesiaDailyStat = () => {
  const { data, error } = useSWR(`${INDONESIA_API_URL}/harian`, fetcher);

  return { data, isLoading: !error && !data, isError: !!error };
};
