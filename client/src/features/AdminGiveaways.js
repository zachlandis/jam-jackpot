import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGiveaways, giveawayUpdated, deleteGiveaway } from './giveawaysSlice';

function AdminGiveaways() {

    const giveaways = useSelector((state) => state.giveaways.entities);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGiveaways()); // Dispatch the action to fetch giveaways data
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
  
    const giveawayElements = giveaways.map((giveaway) => {
    const formattedDate = formatDate(giveaway.event_date);

    function handleDelete() {
        dispatch(deleteGiveaway(giveaway.id))
    }

    return (
      <div key={giveaway.id} className='left-aligned'>
        <div className='giveawayList-div'>
          <div className="column">
            <h2>{giveaway.title}</h2>
            <p><strong>Date:</strong> {giveaway.event_date}</p>
            <p><strong>Venue:</strong> {giveaway.event_venue}</p>
            <p><strong>Location:</strong> {giveaway.event_location}</p>
          </div>
          <div className="column">
            <p><strong>Total Entries:</strong> {giveaway.total_entries}</p>
            <h5> !! Add scrolling list of users !!</h5>
          </div>
          <div className="column">
            <div className="controls column">
              <h4>Controls Column</h4>
              <button onClick={handleDelete}>Delete Giveaway</button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{giveawayElements}</div>;
}

export default AdminGiveaways;
