import { Request, Response } from "express";
import { findOrCreateContact } from "../services/contactServices"; // Adjust path if necessary

export const identifyContact = async (req: Request, res: Response) => {
  try {
    const { email, phoneNumber } = req.body;

    if (!email && !phoneNumber) {
      return res.status(400).json({ error: "Email or phoneNumber is required" });
    }

    const result = await findOrCreateContact(email, phoneNumber);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error identifying contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
