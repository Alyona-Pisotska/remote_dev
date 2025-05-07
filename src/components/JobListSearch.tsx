import JobList from './JobList.tsx';
import { useJobItemsContext } from '../contexts/JobItemsContextProvider.tsx';

function JobListSearch() {
  const { jobItemsSortedAndSliced, isLoading} = useJobItemsContext();

  return <JobList jobItems={jobItemsSortedAndSliced} isLoading={isLoading} />;
}

export default JobListSearch;
