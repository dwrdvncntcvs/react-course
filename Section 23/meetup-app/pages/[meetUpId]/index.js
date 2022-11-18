import React from "react";
import MeetUpDetails from "../../components/meetups/MeetUpDetails";

const MeetUpDetailsPage = () => {
  return (
    <MeetUpDetails
      image={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
      }
      title={"A first meetup"}
      address="Some Address"
      description={"This is a first meet up"}
    />
  );
};

export default MeetUpDetailsPage;
