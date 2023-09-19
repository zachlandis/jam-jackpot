import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GiveawayPage() {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const giveawayId = parseInt(id);

  // Access the giveaways data from Redux
  const giveaways = useSelector((state) => state.giveaways.entities);

  // Find the giveaway with the matching id
  const giveaway = giveaways.find((g) => g.id === giveawayId);

  if (!giveaway) {
    // Handle case where giveaway is not found
    return <div>Giveaway not found</div>;
  }
  
  return (
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
  );
}

export default GiveawayPage;
