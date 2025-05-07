import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { type PageDirection } from '../lib/types/types.ts';
import { useJobItemsContext } from '../contexts/JobItemsContextProvider.tsx';

type PaginationButtonProps =  {
  direction: PageDirection;
  currentPage: number;
  onClick: (direction: PageDirection ) => void;
};

export default function PaginationControls() {
  const {
    currentPage,
    totalNumberOfPages,
    handleChangePage: onClick,
  } = useJobItemsContext();

  return (
    <section className="pagination">
      {currentPage > 1 &&
        <PaginationButton
          onClick={onClick}
          direction='previous'
          currentPage={currentPage}
        />
      }
      {currentPage < totalNumberOfPages &&
        <PaginationButton
          onClick={onClick}
          direction='next'
          currentPage={currentPage}
        />
      }
    </section>
  );
}

function PaginationButton({ direction, currentPage, onClick }: PaginationButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClick(direction);
        e.currentTarget.blur();
      }}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === 'previous' && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}

      {direction === 'next' && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
