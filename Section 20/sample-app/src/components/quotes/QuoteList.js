import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { sortQuotes } from "../../helper/helper";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort");
  const isSortingAsc = sort === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

  const changeSorting = () => {
    setSearchParams({ sort: isSortingAsc ? "dsc" : "asc" });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSorting}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
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
    </Fragment>
  );
};

export default QuoteList;
