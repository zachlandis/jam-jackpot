import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGiveaways } from '../Reducers/giveawaysSlice';
import { ClipLoader } from 'react-spinners';
import GiveawayList from './GiveawayList';

function Giveaways() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.giveaways.status === 'loading');

  useEffect(() => {
    dispatch(fetchGiveaways());
  }, []);

  if (loading) {
    return (
      <div className='loading-spinner-container'>
        <div className='loading-spinner'>
          <ClipLoader loading={loading} size={150} color={'#123abc'} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Upcoming Giveaways</h1>
      <GiveawayList />
    </div>
  );
}

export default Giveaways;
