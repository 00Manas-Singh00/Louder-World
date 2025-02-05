import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailModal from "./EmailModal";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events") // Adjust the API URL as necessary
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div>
      <h1>Upcoming Events in Sydney</h1>
      <div className="event-list">
        {events.length === 0 ? (
          <p>No events found. Please check back later.</p> // Empty events handling
        ) : (
          events.map((event) => (
            <div key={event._id} className="event-item">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <button onClick={() => setSelectedEvent(event)}>
                Get Tickets
              </button>
            </div>
          ))
        )}
      </div>

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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import EmailModal from "./EmailModal";

// const EventList = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/events") // Adjust the API URL as necessary
//       .then((res) => setEvents(res.data))
//       .catch((err) => console.error("Error fetching events:", err));
//   }, []);

//   return (
//     <div>
//       <h1>Upcoming Events in Sydney</h1>
//       <div className="event-list">
//         {events.map((event) => (
//           <div key={event._id} className="event-item">
//             <h3>{event.title}</h3>
//             <p>{event.date}</p>
//             <button onClick={() => setSelectedEvent(event)}>Get Tickets</button>
//           </div>
//         ))}
//       </div>

//       {selectedEvent && (
//         <EmailModal
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default EventList;
