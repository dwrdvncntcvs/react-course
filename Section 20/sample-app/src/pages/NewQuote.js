import React from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
  const navigate = useNavigate();

  const addQuoteHandler = (data) => {
    console.log("Quote Data: ", data);
    navigate({ pathname: "/quotes" });
  };

  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}

export default NewQuote;
