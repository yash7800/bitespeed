import express from "express";
import { identifyContact } from "../controllers/contactController"; // Adjust path if necessary

const router = express.Router();

router.post("/", identifyContact);

export default router;
