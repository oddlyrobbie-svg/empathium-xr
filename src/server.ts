import express from "express";
import cors from "cors";
import { env } from "./config/env";
import healthRoutes from "./routes/healthRoutes";
import guardianRoutes from "./routes/guardianRoutes";

const app = express();
const port = Number(env.port ?? 3000);

// Basic middleware for JSON API requests.
app.use(cors());
app.use(express.json());

// Minimal protocol endpoints.
app.use("/health", healthRoutes);
app.use("/guardian", guardianRoutes);

app.listen(port, () => {
  console.log(`Empathium XR backend running on port ${port}`);
});
