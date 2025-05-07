import { useJobItemsContext } from '../contexts/JobItemsContextProvider.tsx';

function ResultsCount() {
  const { totalNumberOfResults } = useJobItemsContext();

  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfResults}</span> results
    </p>
  );
}

export default ResultsCount;
