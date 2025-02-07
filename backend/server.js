import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import eventRoutes from "./routes/events.js";
import scrapeEvents from "./scraper.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/events", eventRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");

    // Start the server only after DB connection
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

    // Run scraper immediately on startup
    scrapeEvents();

    // Schedule scraper to run every 24 hours
    setInterval(scrapeEvents, 24 * 60 * 60 * 1000);
  })
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

export default app;
