import React, { useState, useEffect } from 'react';
//import JOKES from './JOKES.json'



const JockBlog = () => {
  const [jokes, setJokes] = useState([]); 
  const [Loaded, setLoaded] = useState(false);

  const LoadJokes = async () => {
    setLoaded(false);
    try {
      const responseJokes = await fetch('https://run.mocky.io/v3/76dea8d2-b956-42eb-adde-edc5f9fe8167');



      if (!responseJokes.ok) {
        throw new Error(`HTTP error! Status: ${responseJokes.status}`);
      }
      const jokes = await responseJokes.json();
      console.log("Fetched jokes:", jokes);
      setJokes(jokes);
    } catch (error) {
      console.error('Error loading jokes:', error);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    console.log('useEffect');
    LoadJokes();
  }, []);

  return (
    <div className="jockblog-container">
      {Loaded  && <div>Loading</div>}  


      {/* Conditional rendering: if no jokes, show "No Jokes" */}
      {jokes.length === 0 && <div className="no-jokes">No Jokes</div>}
      {/* Display jokes once they're loaded */}
      {jokes.length > 0 && (
        <ul>
          {jokes.map((joke) => (
                <li key={joke.id} className="joke-item">
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
              {/* Image path relative to the public folder */}
              <img   className="joke-image" 
              src={`/assets/img/jokes/${joke.image}`} alt={joke.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JockBlog;