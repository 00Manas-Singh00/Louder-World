import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import eventRoutes from "./routes/events.js";
import scrapeEvents from "./scraper.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/events", eventRoutes);

// Run scraper every 24 hours to fetch events
setInterval(scrapeEvents, 24 * 60 * 60 * 1000); // 24 hours interval

mongoose
  .connect("mongodb+srv://00manassingh00:QikOGEfOVudA2vlz@gmail.cwxgx.mongodb.net/?retryWrites=true&w=majority&appName=gmail", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
