import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchGiveaways,
  deleteGiveaway,
  updateGiveaway,
} from '../Reducers/giveawaysSlice';
import { updatePrize } from '../Reducers/PrizesSlice';
import PickWinner from './PickWinner';

function AdminGiveaways() {
  const [editableFields, setEditableFields] = useState({});
  const [editedValues, setEditedValues] = useState({});
  const [editedPrizes, setEditedPrizes] = useState({});
  const [showPickWinnerByGiveaway, setShowPickWinnerByGiveaway] = useState({});
  const [pickWinnerData, setPickWinnerData] = useState({});

  const giveaways = useSelector((state) => state.giveaways.entities);
  const loading = useSelector((state) => state.giveaways.status === 'loading');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGiveaways());
  }, []);

  const handlePickWinner = (giveawayId) => {
    const giveaway = giveaways.find((g) => g.id === giveawayId);

    setPickWinnerData((prevState) => ({
      ...prevState,
      [giveawayId]: {
        title: giveaway.title,
        event_date: giveaway.event_date,
        event_venue: giveaway.event_venue,
        event_location: giveaway.event_location,
        entries: giveaway.entries,
      },
    }));

    togglePickWinner(giveawayId);
  };

  const togglePickWinner = (giveawayId) => {
    setShowPickWinnerByGiveaway((prevState) => ({
      ...prevState,
      [giveawayId]: !prevState[giveawayId],
    }));
  };

  function formatDate(dateString) {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };

    const utcDate = new Date(dateString);
    const localDate = new Date(
      utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
    );

    return localDate.toLocaleDateString(undefined, options);
  }

  const handleDelete = (giveawayId) => {
    dispatch(deleteGiveaway(giveawayId));
  };

  const handleUpdate = (giveawayId) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [giveawayId]: !prevState[giveawayId],
    }));

    if (!editedPrizes[giveawayId]) {
      setEditedPrizes((prevState) => ({
        ...prevState,
        [giveawayId]: {
          number_of_tickets:
            giveaways.find((g) => g.id === giveawayId)?.prize.number_of_tickets ||
            0,
          redemption_instructions:
            giveaways.find((g) => g.id === giveawayId)?.prize
              .redemption_instructions || '',
        },
      }));
    }
  };

  const handleInputChange = (giveawayId, fieldName, value) => {
    if (fieldName === 'number_of_tickets' || fieldName === 'redemption_instructions') {
      setEditedPrizes((prevState) => ({
        ...prevState,
        [giveawayId]: {
          ...prevState[giveawayId],
          [fieldName]: value,
        },
      }));
    } else {
      setEditedValues((prevState) => ({
        ...prevState,
        [giveawayId]: {
          ...prevState[giveawayId],
          [fieldName]: value,
        },
      }));
    }
  };

  const handleSave = (giveawayId) => {
    dispatch(updateGiveaway({ id: giveawayId, ...editedValues[giveawayId] }));
    dispatch(updatePrize({ id: giveawayId, ...editedPrizes[giveawayId] }));

    setEditedValues((prevState) => ({
      ...prevState,
      [giveawayId]: {},
    }));
    setEditedPrizes((prevState) => ({
      ...prevState,
      [giveawayId]: {},
    }));

    handleUpdate(giveawayId);
  };

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
      {giveaways.map((giveaway) =>
        showPickWinnerByGiveaway[giveaway.id] && (
          <PickWinner
            key={giveaway.id}
            giveawayId={giveaway.id}
            giveaway={pickWinnerData[giveaway.id]}
            setShowPickWinnerByGiveaway={setShowPickWinnerByGiveaway}
            showPickWinnerByGiveaway={showPickWinnerByGiveaway}
          />
        )
      )}
      <div className='table-container'>
        <table className='table table-striped'>
          <thead className='table-header'>
            <tr>
              <th>Title</th>
              <th>Venue</th>
              <th>Location</th>
              <th>Date</th>
              <th>Genre</th>
              <th>Prize</th>
              <th>Redeem Prize</th>
              <th>Total Entries</th>
              <th>Pick Winner</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {giveaways.map((giveaway) => (
              <tr key={giveaway.id}>
                <td>
                  {editableFields[giveaway.id] ? (
                    <input
                      type='text'
                      value={editedValues[giveaway.id]?.title || giveaway.title}
                      onChange={(e) =>
                        handleInputChange(giveaway.id, 'title', e.target.value)
                      }
                    />
                  ) : (
                    giveaway.title
                  )}
                </td>
                <td>
                  {editableFields[giveaway.id] ? (
                    <input
                      type='text'
                      value={
                        editedValues[giveaway.id]?.event_venue ||
                        giveaway.event_venue
                      }
                      onChange={(e) =>
                        handleInputChange(
                          giveaway.id,
                          'event_venue',
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    giveaway.event_venue
                  )}
                </td>
                <td>
                  {editableFields[giveaway.id] ? (
                    <input
                      type='text'
                      value={
                        editedValues[giveaway.id]?.event_location ||
                        giveaway.event_location
                      }
                      onChange={(e) =>
                        handleInputChange(
                          giveaway.id,
                          'event_location',
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    giveaway.event_location
                  )}
                </td>
                <td>
                  {editableFields[giveaway.id] ? (
                    <input
                      type='text'
                      value={
                        editedValues[giveaway.id]?.event_date ||
                        formatDate(giveaway.event_date)
                      }
                      onChange={(e) =>
                        handleInputChange(
                          giveaway.id,
                          'event_date',
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    formatDate(giveaway.event_date)
                  )}
                </td>
                <td>
                  {editableFields[giveaway.id] ? (
                    <input
                      type='text'
                      value={editedValues[giveaway.id]?.genre || giveaway.genre}
                      onChange={(e) =>
                        handleInputChange(giveaway.id, 'genre', e.target.value)
                      }
                    />
                  ) : (
                    giveaway.genre
                  )}
                </td>
                <td>
                  {editableFields[giveaway.id] ? (
                    <input
                      type='text'
                      value={editedPrizes[giveaway.id]?.number_of_tickets}
                      placeholder={giveaway?.prize?.number_of_tickets}
                      onChange={(e) =>
                        handleInputChange(
                          giveaway.id,
                          'number_of_tickets',
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    giveaway.prize.number_of_tickets
                  )}
                </td>
                <td>
                  {editableFields[giveaway.id] ? (
                    <input
                      type='text'
                      value={editedPrizes[giveaway.id]?.redemption_instructions}
                      placeholder={giveaway?.prize?.redemption_instructions}
                      onChange={(e) =>
                        handleInputChange(
                          giveaway.id,
                          'redemption_instructions',
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    giveaway.prize.redemption_instructions
                  )}
                </td>
                <td>{giveaway.entries.length}</td>
                <td>
                  <div>
                    <button onClick={() => handlePickWinner(giveaway.id)}>
                      🙌
                    </button>
                  </div>
                </td>
                <td>
                  <div className='controls'>
                    {editableFields[giveaway.id] ? (
                      <button onClick={() => handleSave(giveaway.id)}>✅</button>
                    ) : (
                      <button onClick={() => handleUpdate(giveaway.id)}>✍️</button>
                    )}
                  </div>
                </td>
                <td>
                  <div>
                    <button onClick={() => handleDelete(giveaway.id)}>❌</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminGiveaways;
