import React from "react";
import classes from "./MeetUpDetails.module.css";

const MeetUpDetails = ({ image, title, address, description }) => {
  return (
    <section className={classes.details}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetUpDetails;
