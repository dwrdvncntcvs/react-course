import React from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import MeetUps from "../database/mongodb/models/MeetUp";
import dbConnect from "../database/mongodb/config";

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meet Ups</title>
        <meta name="description" content="Browse new meet ups"></meta>
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
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
