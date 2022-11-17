import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addQuote } from "../api";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";

function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote, false);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addQuoteHandler = (data) => {
    sendRequest(data);
  };

  return (
    <div>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </div>
  );
}

export default NewQuote;
