import React, { useEffect } from "react";
import { getAllQuotes } from "../api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";

export default function Quotes() {
  const {
    sendRequest,
    status,
    data: quotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
 
  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error === "error") return <p className="centered focused">{error}</p>;

  if (status === "completed" && (!quotes || quotes.length === 0))
    return <NoQuotesFound />;

  return (
    <div>
      <h1>Quotes</h1>
      <QuoteList quotes={quotes} />
    </div>
  );
}
