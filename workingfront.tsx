"use client";
import React, { useState } from "react";

function App() {
  const [happinessRating, setHappinessRating] = useState(0);
  const [message, setMessage] = useState("");

  const submitRating = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/submitRating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ happinessRating }),
      });

      const data = await response.json();
      setMessage(data.message);
      setHappinessRating(0); // Reset rating after successful submission
    } catch (error) {
      setMessage("Failed to connect to server");
    }
  };

  return (
    <div>
      <h1>How happy are you right now?</h1>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => setHappinessRating(star)}>
            {happinessRating >= star ? "😊" : "😐"}
          </button>
        ))}
      </div>
      <button onClick={submitRating}>Submit Rating</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

