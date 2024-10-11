import React, { useState } from 'react';
import JOKES from './JOKES.json'
import Button from "../Button/Button"


const JockBlog = () => {
  const [jokes, setJokes] = useState([]); // State to store jokes
  const [loading, setLoading] = useState(false); // State for loading status

  const handleJokeClick = () => {
    setLoading(true); // Set loading state to true when button is clicked
    setTimeout(() => {
      setJokes(JOKES); // Load jokes after 1 second delay
      setLoading(false); // Set loading state back to false
    }, 1000);
  };

  return (
    <div>
      {/* Button to load jokes into the state */}
      <Button handleClick={handleJokeClick}>
        {loading ? 'Loading...' : 'Load Jokes into State'}
      </Button>

      {/* Conditional rendering: if no jokes, show "No Jokes" */}
      {jokes.length === 0 && <div>No Jokes</div>}

      {/* Display jokes once they're loaded */}
      {jokes.length > 0 && (
        <ul>
          {JOKES.map((joke) => (
            <li key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
              {/* Image path relative to the public folder */}
              <img src={`/assets/img/jokes/${joke.image}`} alt={joke.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JockBlog;