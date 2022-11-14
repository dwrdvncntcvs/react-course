import React from "react";
import QuoteList from "../components/quotes/QuoteList";

export default function Quotes() {
  return (
    <div>
      <h1>Quotes</h1>
      <QuoteList quotes={[]} />
    </div>
  );
}
