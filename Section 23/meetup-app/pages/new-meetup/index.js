import React from "react";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetUp = () => {
  const router = useRouter();

  console.log("Should start fetching from now....");
  const addNewMeetup = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("Data: ", data);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Meet Up</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addNewMeetup} />
    </>
  );
};

export default NewMeetUp;
