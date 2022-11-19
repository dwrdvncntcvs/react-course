import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import MeetUps from "../database/mongodb/models/MeetUp";
import dbConnect from "../database/mongodb/config";

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export async function getStaticProps() {
  await dbConnect();
  const meetupList = await MeetUps.find();

  return {
    props: {
      meetups: meetupList.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
