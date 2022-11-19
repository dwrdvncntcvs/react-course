import React from "react";
import MeetUpDetails from "../../components/meetups/MeetUpDetails";
import dbConnect from "../../database/mongodb/config";
import MeetUp from "../../database/mongodb/models/MeetUp";

const MeetUpDetailsPage = ({ image, title, address, description }) => {
  return (
    <MeetUpDetails
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
};

export async function getStaticPaths() {
  await dbConnect();

  const meetups = await MeetUp.find();
  const paths = meetups.map(({ _id }) => ({
    params: {
      meetUpId: _id.toString(),
    },
  }));

  return {
    fallback: false,
    paths,
  };
}

const cleanData = (data) => {
  const document = data._doc;
  const id = data._id.toString();
  delete document._id;
  return { ...document, id };
};

export async function getStaticProps(context) {
  const { meetUpId } = context.params;

  const meetup = await MeetUp.findById(meetUpId);
  const cleanMeetUpData = cleanData(meetup);

  return {
    props: {
      ...cleanMeetUpData,
    },
  };
}

export default MeetUpDetailsPage;
