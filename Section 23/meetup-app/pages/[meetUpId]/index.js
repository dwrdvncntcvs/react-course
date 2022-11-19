import React from "react";
import MeetUpDetails from "../../components/meetups/MeetUpDetails";

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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetUpId: "m1",
        },
      },
      {
        params: {
          meetUpId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetUpId } = context.params;
  console.log("Meet Up ID: ", meetUpId);

  return {
    props: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
      title: "A first meetup",
      address: "Some Address",
      description: "This is a first meet up",
    },
  };
}

export default MeetUpDetailsPage;
