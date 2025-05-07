type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
};

type JobItemExpanded = JobItem & {
  companyURL: string;
  coverImgURL: string;
  description: string;
  duration: string;
  location: string;
  qualifications: string[];
  reviews: string[];
  salary: string;
};

type JobItemsApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
};

type SortBy = 'relevant' | 'recent';
type PageDirection = 'start' | 'next' | 'previous';

export {
  type JobItemsApiResponse,
  type JobItem,
  type JobItemExpanded,
  type SortBy,
  type PageDirection,
};
