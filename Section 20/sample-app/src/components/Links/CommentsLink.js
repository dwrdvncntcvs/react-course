import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const CommentsLink = () => {
  const { quoteId } = useOutletContext();

  return (
    <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
      Load Comments
    </Link>
  );
};

export default CommentsLink;
