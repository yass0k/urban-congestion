import React, { useState } from "react";
import "./FlipCard.css";

function FlipCard({ title, content }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flip-card-hover">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <span>{title}</span>
          </div>
          <div className="flip-card-back">
            <span>{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
