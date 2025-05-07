import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useSearchQuery } from '../hooks/hooks.ts';
import { type JobItem, type PageDirection, type SortBy } from '../lib/types/types.ts';
import { RESULTS_PER_PAGE } from '../lib/constants/constants.ts';
import { useSearchTextContext } from './SearchTextContextProvider.tsx';

type JobItemsContextProviderProps = {
  children: React.ReactNode;
};

type JobItemsContext = {
  jobItems: JobItem[] | undefined;
  jobItemsSortedAndSliced: JobItem[];
  isLoading: boolean;
  totalNumberOfResults: number;
  totalNumberOfPages: number;
  currentPage: number;
  sortBy: SortBy;
  handleChangePage: (direction: PageDirection) => void;
  handleChangeSortBy: (newSortBy: SortBy) => void;
};

const JobItemsContext = createContext<JobItemsContext | null>(null);

function JobItemsContextProvider({ children }: JobItemsContextProviderProps) {
  const { debouncedSearchText } = useSearchTextContext();
  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>('relevant');

  const jobItemsSorted = useMemo(() => {
    return [...(jobItems || [])].sort((a, b) => {
      if (sortBy === 'relevant') {
        return b.relevanceScore - a.relevanceScore;
      } else {
        return a.daysAgo - b.daysAgo;
      }
    })
  }, [sortBy, jobItems]);

  const jobItemsSortedAndSliced = useMemo(() => {
    return jobItemsSorted.slice(
      currentPage * RESULTS_PER_PAGE - RESULTS_PER_PAGE,
      currentPage * RESULTS_PER_PAGE
    );
  }, [jobItemsSorted, currentPage]);

  const totalNumberOfResults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberOfResults / RESULTS_PER_PAGE;

  const handleChangePage = useCallback((direction: PageDirection) => {
    if (direction === 'next') {
      setCurrentPage((prevState) => prevState + 1);
    } else if (direction === 'previous') {
      setCurrentPage((prevState) => prevState - 1);
    } else if (direction === 'start') {
      setCurrentPage(1);
    }
  }, []);

  const handleChangeSortBy = useCallback((newSortBy: SortBy) => {
    setCurrentPage(1);
    setSortBy(newSortBy);
  }, []);

  const contextValue = useMemo(() => {
    return {
      jobItems,
      jobItemsSortedAndSliced,
      isLoading,
      totalNumberOfResults,
      totalNumberOfPages,
      currentPage,
      sortBy,
      handleChangePage,
      handleChangeSortBy,
    };
  }, [
    jobItems,
    jobItemsSortedAndSliced,
    isLoading,
    totalNumberOfResults,
    totalNumberOfPages,
    currentPage,
    sortBy,
    handleChangePage,
    handleChangeSortBy,
  ]);

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>);
}

export function useJobItemsContext() {
  const context = useContext(JobItemsContext);

  if (!context) {
    throw new Error(
      'useJobItemsContext must be used within a JobItemsContextProvider'
    );
  }

  return context;
}

export default JobItemsContextProvider;
