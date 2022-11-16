import React, { useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getSingleQuote } from "../api";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";

export default function QuoteDetails() {
  const { quoteId } = useParams();
  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (status === "error") return <p className="centered">{error}</p>;

  if (!quote.text) return <NoQuotesFound />;

  return (
    <div>
      <h1>QuoteDetails</h1>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <div className="centered">
        <Outlet context={{ quoteId }} />
      </div>
    </div>
  );
}
