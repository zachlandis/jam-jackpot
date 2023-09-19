import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GiveawayEntries from './GiveawayEntries';

function GiveawayPage() {
    const [entries, setEntries] = useState(0)

    
    const { id } = useParams(); // Access the 'id' parameter from the URL
    const giveawayId = parseInt(id);
    const giveaways = useSelector((state) => state.giveaways.entities);
    const giveaway = giveaways.find((g) => g.id === giveawayId);

    if (!giveaway) {
        return <div>Giveaway not found</div>;
    }
  
    return (
    <div>
        <div className="giveaway-page">
            <div className="giveaway-details">
                <h1 className="giveaway-title">{giveaway.title}</h1>
                <div className="giveaway-info">
                <p><strong>Date:</strong> {giveaway.event_date}</p>
                <p><strong>Venue:</strong> {giveaway.event_venue}</p>
                <p><strong>Location:</strong> {giveaway.event_location}</p>
                </div>
            </div>
            <img src={giveaway.event_poster} alt={giveaway.title} className="giveaway-poster" />
        </div>
        <div className='giveaway-entries' >
            <GiveawayEntries />
        </div>
    </div>
  );
}

export default GiveawayPage;
