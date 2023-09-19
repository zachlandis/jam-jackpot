import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function GiveawayList() {
  const giveaways = useSelector((state) => state.giveaways.entities);

  // Function to format the date
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

  // Map the giveaways and format the date outside of the return
  const giveawayElements = giveaways.map((giveaway) => {
    const formattedDate = formatDate(giveaway.event_date);

    return (
      <div key={giveaway.id} className='left-aligned'>
        <div className='giveawayList-div'>
          <div className="column">
            <h2>{giveaway.title}</h2>
            <p><strong>Date:</strong> {formattedDate}</p>
            <p><strong>Venue:</strong> {giveaway.event_venue}</p>
            <p><strong>Location:</strong> {giveaway.event_location}</p>
          </div>
          <div className="column">
            <p><strong>Total Entries:</strong> {giveaway.total_entries}</p>
            <Link to={`/giveaways/${giveaway.id}`}>
              Enter Giveaway
            </Link>
          </div>
          <div className="poster-column">
            <div className="poster">
              <img src={giveaway.event_poster} alt={giveaway.title} />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{giveawayElements}</div>;
}

export default GiveawayList;
