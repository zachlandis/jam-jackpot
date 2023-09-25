import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGiveaways, deleteGiveaway, updateGiveaway } from './giveawaysSlice';

function AdminGiveaways() {
    const [editableFields, setEditableFields] = useState({}); 
    const [editedValues, setEditedValues] = useState({}); 

    const giveaways = useSelector((state) => state.giveaways.entities);
    const loading = useSelector((state) => state.giveaways.status === 'loading');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGiveaways()); 
    }, [dispatch]);

    function formatDate(dateString) {
      const options = {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
      };
      
      const utcDate = new Date(dateString);
      const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
  
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
    };

    const handleInputChange = (giveawayId, fieldName, value) => {
        setEditedValues((prevState) => ({
            ...prevState,
            [giveawayId]: {
                ...prevState[giveawayId],
                [fieldName]: value,
            },
        }));
    };


    const handleSave = (giveawayId) => {
      console.log("Edited Values from Save", editedValues);
      dispatch(updateGiveaway({ id: giveawayId, ...editedValues[giveawayId] }));
      setEditedValues((prevState) => ({
        ...prevState,
        [giveawayId]: {},
      }));
      handleUpdate(giveawayId);
    };

    function handlePickWinner(giveawayId) {
      console.log("Winner Picked")
      const giveawayEntries = giveaways.find((giveaway) => giveaway.id === giveawayId).entries;
      const winningEntry = giveawayEntries[Math.floor(Math.random() * giveawayEntries.length)]

      const updatedEntries = giveawayEntries.map((entry) => ({
        ...entry,
        winner: entry.id === winningEntry.id,
      }));
      dispatch(updateGiveaway({ id: giveawayId, entries: updatedEntries}));
    }
       
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
      <div className="table-container">
      <table className="table table-striped">
        <thead className="table-header">
              <tr>
                <th>Title</th>
                <th>Venue</th>
                <th>Location</th>
                <th>Date</th>
                <th>Genre</th>
                <th>Prize</th>
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
                        type="text"
                        value={editedValues[giveaway.id]?.title || giveaway.title}
                        onChange={(e) => handleInputChange(giveaway.id, 'title', e.target.value)}
                      />
                    ) : (
                      giveaway.title
                    )}
                  </td>
                  <td>
                    {editableFields[giveaway.id] ? (
                      <input
                        type="text"
                        value={editedValues[giveaway.id]?.event_venue || giveaway.event_venue}
                        onChange={(e) => handleInputChange(giveaway.id, 'event_venue', e.target.value)}
                      />
                    ) : (
                      giveaway.event_venue
                    )}
                  </td>
                  <td>
                    {editableFields[giveaway.id] ? (
                      <input
                        type="text"
                        value={editedValues[giveaway.id]?.event_location || giveaway.event_location}
                        onChange={(e) => handleInputChange(giveaway.id, 'event_location', e.target.value)}
                      />
                    ) : (
                      giveaway.event_location
                    )}
                  </td>
                  <td>
                    {editableFields[giveaway.id] ? (
                      <input
                        type="text"
                        value={editedValues[giveaway.id]?.event_date || giveaway.event_date}
                        onChange={(e) => handleInputChange(giveaway.id, 'event_date', e.target.value)}
                      />
                    ) : (
                      giveaway.event_date
                    )}
                  </td>
                  <td>
                    {editableFields[giveaway.id] ? (
                      <input
                        type="text"
                        value={editedValues[giveaway.id]?.genre || giveaway.event_date}
                        onChange={(e) => handleInputChange(giveaway.id, 'event_date', e.target.value)}
                      />
                    ) : (
                      giveaway.genre
                    )}
                  </td>
                  <td>
                    {/* {editableFields[giveaway.id] ? (
                      <input
                        type="text"
                        value={editedValues[giveaway.id]?.event_date || giveaway.event_date}
                        onChange={(e) => handleInputChange(giveaway.id, 'event_date', e.target.value)}
                      />
                    ) : ( */}
                      {giveaway.prize.number_of_tickets}
                    {/* )} */}
                  </td>
                  <td>{giveaway.total_entries}</td>
                  <td>
                    <div>
                        <button onClick={() => handlePickWinner(giveaway.id)}>🙌</button>
                      </div>
                  </td>
                  <td>
                    <div className="controls">
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

    );
}

export default AdminGiveaways;
