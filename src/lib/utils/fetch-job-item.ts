import { type JobItemExpanded } from '../types/types.ts';
import { BASE_URL } from '../constants/constants.ts';

type JobItemApiResponse = {
  public: boolean;
  jobItem: JobItemExpanded;
};

const fetchJobItem = async (id: number): Promise<JobItemApiResponse>  => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  return await response.json();
};

export { fetchJobItem };
