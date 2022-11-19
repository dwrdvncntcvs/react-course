//api/new-meetup
import dbConnect from "../../database/mongodb/config";
import MeetUp from "../../database/mongodb/models/MeetUp";

async function handler(req, res) {
  switch (req.method) {
    case "POST":
      console.log("Creating data...");
      const { title, image, address, description } = req.body;

      try {
        const db = await dbConnect();

        const result = await MeetUp.create({
          title,
          image,
          address,
          description,
        });

        console.log("Result: ", result);
        db.connection.close();

        return res.status(201).send({ message: "Meetup created", result });
      } catch (err) {
        console.log("Error: ", err.message);
      }
    default:
      return;
  }
}

export default handler;
