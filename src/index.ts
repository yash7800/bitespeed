import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import contactRoutes from "./routes/contactRoutes";

dotenv.config({ path: ".env" });

const app = express();
app.use(cors());
app.use(express.json());

app.use("/identify", contactRoutes);

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
