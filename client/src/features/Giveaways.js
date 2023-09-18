import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGiveaways } from './giveawaysSlice';

function Giveaways() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGiveaways());
  }, [dispatch]);

  const giveaways = useSelector((state) => state.giveaways.entities);
  const loading = useSelector((state) => state.giveaways.status === 'loading');

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <ul>
        {giveaways.map((giveaway) => (
          <li key={giveaway.id} className='left-aligned' >{giveaway.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Giveaways;
