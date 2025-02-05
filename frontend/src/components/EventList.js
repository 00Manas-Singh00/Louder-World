import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailModal from "./EmailModal";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events") // Fetch events from the backend
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      {events.length === 0 ? (
        <p>No events found. Please check back later.</p>
      ) : (
        events.map((event) => (
          <div key={event.link} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <button onClick={() => setSelectedEvent(event)}>Get Tickets</button>
          </div>
        ))
      )}

      {/* Display modal if an event is selected */}
      {selectedEvent && (
        <EmailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventList;
