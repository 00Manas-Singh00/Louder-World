import React, { useState } from "react";

const EmailModal = ({ event, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }
    alert(`Email: ${email} submitted for ${event.title}`);
    window.open(event.link, "_blank"); // Redirect to the event page
    onClose();
  };

  return (
    <div className="modal">
      <h3>Enter Email for {event.title}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EmailModal;
