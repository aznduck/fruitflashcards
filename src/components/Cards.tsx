import React, { useState } from "react";
import Flashcard from "./FlashCard";

const Cards = () => {
  const initFlashcards = [
    { front: "A yellow fruit that is rich in potassium", back: "Banana" },
    { front: "Newton discovered gravity because of this fruit", back: "Apple" },
    { front: "Minute Maid, Tropicana, etc.", back: "Orange" },
    { front: "Spongebob lives here", back: "Pineapple" },
    { front: "Commonly used alongside eggplant emoji", back: "Peach" },
  ];

  const [flashcards, setFlashcards] = useState(initFlashcards);

  const shuffleFlashcards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
  };

  return (
    <>
      <button className="shuffleButton" onClick={shuffleFlashcards}>
        Shuffle
      </button>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000000"
        data-bs-wrap="false"
      >
        <div className="carousel-indicators">
          {flashcards.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {flashcards.map((card, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Flashcard front={card.front} back={card.back} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Cards;
