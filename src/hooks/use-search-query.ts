import { useQuery } from '@tanstack/react-query';
import { fetchJobItems, handleError } from '../lib/utils/utils.ts';

function useSearchQuery(searchText: string) {
  const { data, isInitialLoading } = useQuery(
    ['job-items', searchText],
    () => fetchJobItems(searchText),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText),
      onError: handleError,
    },
  );

  return {
    jobItems: data?.jobItems,
    isLoading: isInitialLoading,
  } as const
}

export { useSearchQuery };
