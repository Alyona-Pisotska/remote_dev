import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import JobList from './JobList.tsx';
import { useBookmarksContext } from '../contexts/BookmarksContextProvider.tsx';

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const { bookmarkedJobItems, isLoading} = useBookmarksContext();

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
