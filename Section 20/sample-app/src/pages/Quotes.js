import React from "react";
import QuoteList from "../components/quotes/QuoteList";
import { DUMMY_QUOTES } from "../data/quotes";

export default function Quotes() {
  return (
    <div>
      <h1>Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
}
