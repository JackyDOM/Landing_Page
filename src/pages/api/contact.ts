import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
    
    // Validation
    const errors: string[] = [];

    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!firstName || typeof firstName !== "string" || firstName.trim() === "") {
      errors.push("First name is required.");
    }
    if(!nameRegex.test(firstName)) {
      errors.push("First name should not contain special characters.");
    }

    if (!lastName || typeof lastName !== "string" || lastName.trim() === "") {
      errors.push("Last name is required.");
    }
    if(!nameRegex.test(lastName)) {
      errors.push("First name should not contain special characters.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string") {
      errors.push("A valid email address is required.");
    }
    if( !emailRegex.test(email)) {
      errors.push("Phone Number should not contain special characters.");
    }

    const phoneRegex = /^\+?[1-9]\d{1,14}(\s?-?\(?\d+\)?)*$/;
    if (!phoneNumber || typeof phoneNumber !== "string") {
      errors.push("Phone Number is required.");
    }
    if(!phoneRegex.test(phoneNumber)) {
      errors.push("Phone Number should not contain special characters.");
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      errors.push("Message is required.");
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
