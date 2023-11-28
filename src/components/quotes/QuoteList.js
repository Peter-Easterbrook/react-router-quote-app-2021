import { Fragment, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// const sortQuotes = (quotes, ascending) => {
//   return quotes.sort((quoteA, quoteB) => {
//     if (ascending) {
//       return quoteA.id > quoteB.id ? 1 : -1;
//     } else {
//       return quoteA.id < quoteB.id ? 1 : -1;
//     }
//   });
// };

const sortQuotes = (quotes, ascending) => {
  // Create a new array using slice to avoid modifying the original array
  const sortedQuotes = [...quotes];

  return sortedQuotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    navigate(location.pathname, {
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <ul className={classes.list}>
          {sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      </Suspense>
    </Fragment>
  );
};

export default QuoteList;
