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

  console.log(giveaways);
  
  return (
    <div>
      <h1>{giveaway.title}</h1>
      {/* Display giveaway details */}
      <p>Date: {giveaway.event_date}</p>
      <p>Venue: {giveaway.event_venue}</p>
      <p>Location: {giveaway.event_location}</p>
      <p>Total Entries: {giveaway.total_entries}</p>
      <button>Enter Giveaway</button>
      {/* Add more details or components as needed */}
    </div>
  );
}

export default GiveawayPage;
