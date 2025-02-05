import React from "react";
import "./App.css";
import EventList from "./components/EventList"; // Import EventList Component

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Upcoming Events in Sydney</h1>
      </header>
      <main>
        <EventList /> {/* Event list component */}
      </main>
      <footer>
        <p>&copy; 2025 Louder World. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
