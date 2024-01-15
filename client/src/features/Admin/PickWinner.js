import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEntry } from '../Reducers/EntriesSlice';
import { updateUser } from '../Reducers/UsersSlice';

function PickWinner({ giveawayId, showPickWinnerByGiveaway, setShowPickWinnerByGiveaway }) {
  const [selectedWinner, setSelectedWinner] = useState('');

  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries.entities)?.filter(entry=> entry.giveaway.id === giveawayId);
  const giveaways = useSelector((state) => state.giveaways.entities);
  const currentGiveawayId = giveawayId; 
  const currentGiveaway = giveaways.find((giveaway) => giveaway.id === currentGiveawayId);

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
    if (selectedWinner && selectedWinner.entry.id) {
      const prevWins = Array.isArray(selectedWinner.entry.user.prev_wins)
        ? selectedWinner.entry.user.prev_wins
        : [];
      dispatch(updateEntry({
        id: selectedWinner.entry.id, 
        winner: true,
      }));
      const updatedUser = {
        id: selectedWinner.randomWinnerId,
        prev_wins: [...prevWins, currentGiveawayId],
      };
      dispatch(updateUser(updatedUser));
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
