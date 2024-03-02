import React, { useState } from 'react';

export const StarRating = ({ totalStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          style={{
            cursor: 'pointer',
            color: index + 1 <= rating ? 'gold' : 'gray',
          }}
        >
          &#9733; {/* Unicode character for a star */}
        </span>
      ))}
      <p>Current Rating: {rating}</p>
    </div>
  );
};
