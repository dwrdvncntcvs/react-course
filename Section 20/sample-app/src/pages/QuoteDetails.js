import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { DUMMY_QUOTES } from "../data/quotes";

export default function QuoteDetails() {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) return <NoQuotesFound />;

  return (
    <div>
      <h1>QuoteDetails</h1>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
