import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { addComment } from "../../api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = ({ onAddedComment }) => {
  const commentTextRef = useRef();
  const { quoteId } = useParams();
  const { sendRequest, status, error } = useHttp(addComment, false);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const text = commentTextRef.current.value;

    sendRequest({ commentData: { text }, quoteId });
    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
