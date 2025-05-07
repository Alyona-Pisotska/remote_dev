import { type JobItem } from '../lib/types/types.ts';
import JobListItem from './JobListItem.tsx';
import Spinner from './Spinner.tsx';
import { useActiveIdContext } from '../contexts/ActivIdContextProvider.tsx';

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: JobListProps) {
  const { activeId } = useActiveIdContext();

  return (
    <ul className="job-list">
      {isLoading
        ? <Spinner />
        : jobItems.map((jobItem) => (
            <JobListItem
              key={jobItem.id}
              jobItem={jobItem}
              isActive={jobItem.id === activeId}
            />
          ))
      }
    </ul>
  );
}

export default JobList;
