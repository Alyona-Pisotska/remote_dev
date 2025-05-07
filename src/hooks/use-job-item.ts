import { useQuery } from '@tanstack/react-query';
import { fetchJobItem, handleError } from '../lib/utils/utils.ts';

function useJobItem(id: number | null) {
  const { data, isInitialLoading } = useQuery(
    ['job-item', id],
    () => id ? fetchJobItem(id) : null,
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    },
  );

  return {
    jobItem: data?.jobItem,
    isLoading: isInitialLoading
  } as const;
}

export { useJobItem };
