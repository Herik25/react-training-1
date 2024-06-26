import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchJokes } from './store/thunks/FetchJokes';


const JokeComponent = () => {
  const dispatch = useDispatch();
  const joke = useSelector((state) => state.jokes.joke);
  const loading = useSelector((state) => state.jokes.loading);
  const error = useSelector((state) => state.jokes.error);

  const handleFetchJoke = () => {
    dispatch(FetchJokes());
  };

  return (
    <div>
      <button onClick={handleFetchJoke} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Joke'}
      </button>
      {error && <p>Error: {error}</p>}
      {joke && <p>{joke.setup}</p>}
      {joke && <p>{joke.punchline}</p>}
    </div>
  );
};

export default JokeComponent;
