// GiveawayList.js

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function GiveawayList() {
  const giveaways = useSelector((state) => state.giveaways.entities);

  return (
    <div>
      {giveaways.map((giveaway) => (
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
))}


    </div>
  );
}

export default GiveawayList;
