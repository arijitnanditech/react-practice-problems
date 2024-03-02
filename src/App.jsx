import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { StarRating } from './StarRating';

function App() {
  const [count, setCount] = useState(0);
  const handleRatingChange = (newRating) => {
    console.log(`New Rating: ${newRating}`);
    // You can use this callback to update the rating in your state or perform other actions.
  };

  return (
    <>
      return (
      <div>
        <h1>Star Rating Component</h1>
        <StarRating
          totalStars={5}
          initialRating={3}
          onRatingChange={handleRatingChange}
        />
      </div>
      );
    </>
  );
}

export default App;
