import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const addNewMeetup = (meetupData) => {
    console.table(meetupData);
  };

  return (
    <div>
      <NewMeetupForm onAddMeetup={addNewMeetup} />
    </div>
  );
};

export default NewMeetUp;
