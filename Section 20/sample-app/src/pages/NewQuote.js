import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
  const addQuoteHandler = (data) => {
    console.log("Quote Data: ", data);
  };

  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}

export default NewQuote;
