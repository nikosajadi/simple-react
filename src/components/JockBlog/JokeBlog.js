import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './JokeBlog.css';

const JockBlog = () => {
  const [jokes, setJokes] = useState([]); 
  const [loaded, setLoaded] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);

  const loadJokes = async () => {
    setLoaded(true);
    try {
      const responseJokes = await fetch('https://run.mocky.io/v3/76dea8d2-b956-42eb-adde-edc5f9fe8167');
      const jokes = await responseJokes.json();
      console.log("Fetched jokes:", jokes);
      setJokes(jokes);
    } catch (error) {
      console.error("Failed to load jokes:", error);
    }
    setLoaded(false);
  };

  useEffect(() => {
    loadJokes();
  }, []);

  useEffect(() => {
    setPageCount(calculatePageCounts());
    console.log("Page count:", calculatePageCounts());
  }, [jokes]);

  const calculatePageCounts = () => {
    if (jokes.length % 2 > 0) {
      return parseInt(jokes.length / 2 + 1);
    }
    return parseInt(jokes.length / 2);
  };

  const handleClickOnPages = (pageNumber) => {
    setActivePageNumber(pageNumber);
  };

  return (
    <div className="jockblog-container">
      {loaded && <div>Loading...</div>}
      {jokes.length === 0 && !loaded && <div className="no-jokes">No Jokes</div>}
      {jokes.length > 0 && (
        <div>
          <ul>
            {jokes.slice(2 * (activePageNumber - 1), 2 * activePageNumber).map((joke) => (
              <li key={joke.id} className="joke-item">
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
                <img
                  className="joke-image"
                  src={`/assets/img/jokes/${joke.image}`}
                  alt={joke.title}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
<ul className='pagination'>
  {new Array(pageCount).fill(0).map((item, index) => (
    <li key={index} className={activePageNumber === index + 1 ? "active" : ""}>
      <Button handleClick={() => handleClickOnPages(index + 1)}>{index + 1}</Button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default JockBlog;
