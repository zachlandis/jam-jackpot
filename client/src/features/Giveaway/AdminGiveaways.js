import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGiveaways, deleteGiveaway, updateGiveaway } from './giveawaysSlice';

function AdminGiveaways() {
    const [editableFields, setEditableFields] = useState({}); 
    const [editedValues, setEditedValues] = useState({}); 

    const giveaways = useSelector((state) => state.giveaways.entities);

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
       

    return (
        <div>
            {giveaways.map((giveaway) => (
                <div key={giveaway.id} className='left-aligned'>
                    <div className='giveawayList-div'>
                        <div className="column">
                            <h2>{editableFields[giveaway.id] ? (
                                <input
                                    type="text"
                                    value={editedValues[giveaway.id]?.title || giveaway.title}
                                    onChange={(e) => handleInputChange(giveaway.id, 'title', e.target.value)}
                                />
                            ) : (
                                giveaway.title
                            )}</h2>
                              <p><strong>Venue: </strong>{editableFields[giveaway.id] ? (
                                <input
                                    type="text"
                                    value={editedValues[giveaway.id]?.event_venue || giveaway.event_venue}
                                    onChange={(e) => handleInputChange(giveaway.id, 'event_venue', e.target.value)}
                                />
                            ) : (
                                giveaway.event_venue
                            )}</p>
                            <p><strong>Location: </strong>{editableFields[giveaway.id] ? (
                                <input
                                    type="text"
                                    value={editedValues[giveaway.id]?.event_location || giveaway.event_location}
                                    onChange={(e) => handleInputChange(giveaway.id, 'event_location', e.target.value)}
                                />
                            ) : (
                                giveaway.event_location
                            )}</p>
                            <p><strong>Date:</strong> {editableFields[giveaway.id] ? (
                                <input
                                    type="text"
                                    value={editedValues[giveaway.id]?.event_date || giveaway.event_date}
                                    onChange={(e) => handleInputChange(giveaway.id, 'event_date', e.target.value)}
                                />
                            ) : (
                                formatDate(giveaway.event_date)
                            )}</p>
                            {/* Add similar logic for other fields */}
                        </div>
                        <div className="column">
                            <p><strong>Total Entries:</strong> {giveaway.total_entries}</p>
                            <h5> !! Add scrolling list of users !!</h5>
                        </div>
                        <div className="column">
                            <div className="controls column">
                                {editableFields[giveaway.id] ? (
                                    <button onClick={() => handleSave(giveaway.id)}>Save</button>
                                ) : (
                                    <button onClick={() => handleDelete(giveaway.id)}>Delete Giveaway</button>
                                )}
                                <button onClick={() => handleUpdate(giveaway.id)}>Update Giveaway</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AdminGiveaways;
