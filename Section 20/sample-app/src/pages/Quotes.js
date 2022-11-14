import React from "react";
import QuoteList from "../components/quotes/QuoteList";
import uuid from "react-uuid";

const DUMMY_QUOTES = [
  {
    id: uuid(),
    author: "Edward Vincent Cuevas",
    text: "Hello World",
  },
  {
    id: uuid(),
    author: "Edward Vincent Cuevas",
    text: "I'am, inevitable",
  },
];

export default function Quotes() {
  return (
    <div>
      <h1>Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
}
