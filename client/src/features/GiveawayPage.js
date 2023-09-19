import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GiveawayEntries from './GiveawayEntries';
import { fetchGiveaways } from './giveawaysSlice';
import { ClipLoader } from 'react-spinners';

function GiveawayPage() {
    
    const { id } = useParams(); // Access the 'id' parameter from the URL
    const giveawayId = parseInt(id);
    const giveaways = useSelector((state) => state.giveaways.entities);
    const giveaway = giveaways.find((g) => g.id === giveawayId);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchGiveaways()); // Dispatch the action to fetch giveaways data
    }, [dispatch]);

    const loading = useSelector((state) => state.giveaways.status === 'loading');

    function formatDate(dateString) {
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        const utcDate = new Date(dateString);
        const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
      
        return localDate.toLocaleDateString(undefined, options);
      }

    const formattedDate = formatDate(giveaway.event_date)

    if (loading) {
        return (
        <div className='loading-spinner-container'>
            <div className='loading-spinner'>
            <ClipLoader loading={loading} size={150} color={'#123abc'} />
            </div>
        </div>
        );
    }

    if (!giveaway) {
        return <div>Giveaway not found</div>;
    }
  
    return (
    <div>
        <div className="giveaway-page">
            <div className="giveaway-details">
                <h1 className="giveaway-title">{giveaway.title}</h1>
                <div className="giveaway-info">
                <p><strong>Date:</strong> {formattedDate}</p>
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
