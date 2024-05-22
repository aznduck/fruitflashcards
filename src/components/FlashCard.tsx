import React, { useState } from "react";
import "../Flashcard.css";

interface FlashcardProps {
  front: string;
  back: string;
}

const Flashcard = ({ front, back }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card ${isFlipped ? "flip" : ""}`} onClick={handleFlip}>
        <div className="card-front">{front}</div>
        <div className="card-back">{back}</div>
      </div>
    </div>
  );
};

export default Flashcard;
