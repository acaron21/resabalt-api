import express, { Application } from "express";
import cors from "cors";
import bookingRoutes from "./routes/helloRoutes";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

export default app;
