import { type JobItemsApiResponse } from '../types/types.ts';
import { BASE_URL } from '../constants/constants.ts';

const fetchJobItems  = async (searchText: string): Promise<JobItemsApiResponse> => {
  const response = await fetch(`${BASE_URL}?search=${searchText}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }

  return await response.json();
};

export { fetchJobItems };
