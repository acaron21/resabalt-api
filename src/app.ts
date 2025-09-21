import express, { Application } from "express";
import cors from "cors";
import helloRoutes from "./routes/helloRoutes";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/hello", helloRoutes);

export default app;
