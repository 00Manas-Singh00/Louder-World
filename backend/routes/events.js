import { Router } from "express";
import Event from "../models/Event.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const events = await Event.find(); // Fetch events from DB
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
