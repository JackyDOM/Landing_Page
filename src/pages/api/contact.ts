import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
    
    // Validation
    const errors: string[] = [];

    if (!firstName || typeof firstName !== "string" || firstName.trim() === "") {
      errors.push("First name is required.");
    }

    if (!lastName || typeof lastName !== "string" || lastName.trim() === "") {
      errors.push("Last name is required.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      errors.push("A valid email address is required.");
    }

    // Check for errors
    if (errors.length > 0) {
      return res.status(400).json({ message: "Validation failed", errors });
    }
    
    // Here you can handle the data, like saving it to a database or sending an email
    console.log("Received data:", { firstName, lastName, email, phoneNumber, message });

    // Send a success response
    res.status(200).json({ message: "Form submission successful" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
