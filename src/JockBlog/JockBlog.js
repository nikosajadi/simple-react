import React from 'react';
import JOKES from './JOKES.json'



const JockBlog = () => {
    return (
      <div>
        {JOKES.map((joke) => (
          <ul key={joke.id}>
            <li>
              <h1>{joke.id}</h1>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            {/* Image path relative to the public folder */}
            <img src={`/assets/img/jokes/${joke.image}`} alt={joke.title} />
            </li>
          </ul>
        ))}
      </div>
    );
  };
  
  export default JockBlog;