import { Router } from "express";
import Event from "../models/Event.js";

const router = Router();

// Fetch all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 }); // Sort events by date
    res.json(events);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching events", error: err.message });
  }
});

// Fetch a specific event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.json(event);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching event", error: err.message });
  }
});

// Create a new event (optional if adding manually)
router.post("/", async (req, res) => {
  try {
    const { title, date, location, image, link } = req.body;
    const newEvent = new Event({ title, date, location, image, link });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating event", error: err.message });
  }
});

export default router;
