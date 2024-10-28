import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
    
    // Here you can handle the data, like saving it to a database or sending an email
    console.log("Received data:", { firstName, lastName, email, phoneNumber, message });

    // Send a success response
    res.status(200).json({ message: "Form submission successful" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
