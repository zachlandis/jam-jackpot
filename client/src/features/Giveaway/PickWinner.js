import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEntry } from '../Entries/EntriesSlice';
import { updateUser } from '../Users/UsersSlice';
import { fetchEntries } from '../Entries/EntriesSlice';

function PickWinner({ giveawayId, showPickWinnerByGiveaway, setShowPickWinnerByGiveaway }) {
  const [selectedWinner, setSelectedWinner] = useState('');
  const [updatedEntries, setUpdatedEntries] = useState([]);

  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries.entities)?.filter(entry=> entry.giveaway.id === giveawayId);
  const giveaways = useSelector((state) => state.giveaways.entities);
  const currentGiveawayId = giveawayId; 
  const currentGiveaway = giveaways.find((giveaway) => giveaway.id === currentGiveawayId);

  useEffect(() => {
    dispatch(fetchEntries(currentGiveawayId));
  }, [dispatch, currentGiveawayId]);

  const handleSelectWinner = () => {
    if (entries.length === 0) {
      setSelectedWinner('No entries');
      return;
    }

    const randomIndex = Math.floor(Math.random() * entries.length);
    const randomWinner = entries[randomIndex];
    const randomWinnerId = randomWinner.id;

    if (randomWinner && randomWinner.user) {
      const { first_name, last_name, email } = randomWinner.user;
      setSelectedWinner({
        first_name,
        last_name,
        email,
        randomWinnerId,
        entry: randomWinner
      });
    } else {
      setSelectedWinner('Winner data not available');
    }
  };

  const handleMarkWinner = () => {
    if (selectedWinner) {
      console.log(selectedWinner)
      dispatch(updateEntry({
        id: selectedWinner.entry.id, 
        winner: true,
      }))
    //   const updatedEntries = entries.map((entry) => {
    //     if (entry.id === selectedWinner.randomWinnerId) {
    //       const updatedUser = {
    //         ...entry.user,
    //         prev_wins: [...entry.user.prev_wins, { giveaway: currentGiveaway, prize: entry.prize }],
    //       };
  
    //       dispatch(updateUser({ id: entry.user.id, user: updatedUser }));
  
    //       return {
    //         ...entry,
    //         winner: true,
    //       };
    //     } else {
    //       return {
    //         ...entry,
    //         winner: false,
    //       };
    //     }
    //   });
    //   setUpdatedEntries(updatedEntries);
    }
  };
  
    
  return (
    <div className="pick-winner-container">
      <div className="column">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{currentGiveaway?.title}</h5>
            <h6 className="card-subtitle">{currentGiveaway?.event_venue}</h6>
            <h6 className="card-subtitle">{currentGiveaway?.event_date}</h6>
            <button
              className="close-button"
              onClick={() => setShowPickWinnerByGiveaway(!showPickWinnerByGiveaway)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <div className="card-body">
            {selectedWinner ? (
              <div>
                <p>
                  <strong>Name:</strong> {selectedWinner.first_name} {selectedWinner.last_name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedWinner.email}
                </p>
                <button onClick={handleMarkWinner} className="winner-button">
                  Final Winner
                </button>
              </div>
            ) : (
              <p>No winner selected yet</p>
            )}
          </div>
          <button onClick={handleSelectWinner} className="select-button">
            Select Winner
          </button>
        </div>
      </div>
    </div>
  );
}

export default PickWinner;