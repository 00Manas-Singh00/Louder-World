import React, { useState } from "react";

const EmailModal = ({ event, onClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    alert(`Email: ${email} submitted for ${event.title}`);

    window.open(event.link, "_blank");
    onClose();
  };

  return (
    <div className="email-modal">
      <div className="modal-content">
        <h2>Enter Email for {event.title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EmailModal;
