import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from './store/thunks/FetchJokes';


const JokeComponent = () => {
  const dispatch = useDispatch();
  const {jokes, pending, error} = useSelector(state => state.jokes)
  const handleFetchJoke = () => {
    console.log(dispatch(fetchJoke("this is my data")).then(console.log("asdfa")))
  };

  return (
    <div>
      <button onClick={handleFetchJoke} disabled={pending}>
        {pending ? 'Loading...' : 'Fetch Joke'}
      </button>
      {error && <p>Error: {error}</p>}
      {jokes && <p>{jokes.setup}</p>}
      {jokes && <p>{jokes.punchline}</p>}
    </div>
  );
};

export default JokeComponent;
