import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GiveawayEntries from '../Entries/GiveawayEntries';
import { ClipLoader } from 'react-spinners';
import { fetchGiveaways } from './giveawaysSlice';


function GiveawayPage() {
    const { id } = useParams();
    const giveawayId = parseInt(id);
    const giveaways = useSelector((state) => state.giveaways.entities);
    const giveaway = giveaways.find((g) => g.id === giveawayId);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchGiveaways());
    }, []);
  
    const loading = useSelector((state) => state.giveaways.status === 'loading');
  
    function formatDate(dateString) {
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      const utcDate = new Date(dateString);
      const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
  
      return localDate.toLocaleDateString(undefined, options);
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
  
    if (!giveaway) {
      return <div>Giveaway not found</div>;
    }
  
    
    const formattedDate = formatDate(giveaway.event_date);
  
    return (
      <div>
        <div className="giveaway-page">
          <div className="giveaway-details">
            <h1 className="giveaway-title">{giveaway.title}</h1>
            <div className="giveaway-info">
              <p className="black-text"><strong>Date:</strong> {formattedDate}</p>
              <p className="black-text"><strong>Venue:</strong> {giveaway.event_venue}</p>
              <p className="black-text"><strong>Location:</strong> {giveaway.event_location}</p>
              <p className="black-text"><strong>Prize:</strong> {giveaway.prize.number_of_tickets} tickets</p>
            </div>
          </div>
          <img src={giveaway.event_poster} alt={giveaway.title} className="giveaway-poster" />
        </div>
        <div className='giveaway-entries'>
          <GiveawayEntries />
        </div>
      </div>
    );
  }
  

export default GiveawayPage;
