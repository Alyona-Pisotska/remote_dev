import { useQueries } from '@tanstack/react-query';
import { fetchJobItem, handleError } from '../lib/utils/utils.ts';
import { type JobItemExpanded } from '../lib/types/types.ts';

function useJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['job-item', id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((jobItem) => Boolean(jobItem)) as JobItemExpanded[];
  const isLoading = results.some((result) => result.isLoading);

  return { jobItems, isLoading };
}

export { useJobItems };
