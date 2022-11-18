import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_LIST = [
  {
    id: "m1",
    title: "A First Meet Up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
    address: "Some address",
    description: "This is a first meet up",
  },
  {
    id: "m2",
    title: "A Second Meet Up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
    address: "Some address 1",
    description: "This is a second meet up",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_LIST} />;
};

export default HomePage;