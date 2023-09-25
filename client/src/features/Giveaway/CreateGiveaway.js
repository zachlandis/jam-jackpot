import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGiveaway } from './giveawaysSlice';

function CreateGiveaway() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    giveawayTitle: '',
    giveawayEventDate: '',
    giveawayEventVenue: '',
    giveawayEventLocation: '',
    giveawayEventPoster: '',
    giveawayEventGenre: '',
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      title: formData.giveawayTitle,
      event_date: formData.giveawayEventDate,
      event_venue: formData.giveawayEventVenue,
      event_location: formData.giveawayEventLocation,
      event_poster: formData.giveawayEventPoster,
      giveawayEventGenre: formData.genre,
      total_entries: 0,
    };
    dispatch(createGiveaway(payload));

    setFormData({
      giveawayTitle: '',
      giveawayEventDate: '',
      giveawayEventVenue: '',
      giveawayEventLocation: '',
      giveawayEventPoster: '',
      giveawayEventGenre: '',
    });
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">New Giveaway</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h5>Giveaway Title</h5>
          <input
            className="form-control"
            name="giveawayTitle"
            type="text"
            placeholder="Giveaway Title"
            value={formData.giveawayTitle}
            onChange={handleOnChange}
            required
          />
        </div>
        <br/>
        <div className="form-group">
        <h5>Event Date</h5>
          <input
            className="form-control"
            name="giveawayEventDate"
            type="date"
            placeholder="Event Date"
            value={formData.giveawayEventDate}
            onChange={handleOnChange}
            required
          />
        </div>
        <br/>
        <div className="form-group">
        <h5>Event Venue</h5>
          <input
            className="form-control"
            name="giveawayEventVenue"
            type="text"
            placeholder="Event Venue"
            value={formData.giveawayEventVenue}
            onChange={handleOnChange}
            required
          />
        </div>
        <br/>
        <div className="form-group">
        <h5>Event Location</h5>
          <input
            className="form-control"
            name="giveawayEventLocation"
            type="text"
            placeholder="Event City, State"
            value={formData.giveawayEventLocation}
            onChange={handleOnChange}
            required
          />
        </div>
        <br/>
        <div className="form-group">
          <h5>Event Genre</h5>
          <select
            className="form-control"
            name="giveawayEventGenre"
            type="dropdown"
            placeholder="EventGenre"
            value={formData.giveawayEventLocation}
            onChange={handleOnChange}
            required
          >
            <option value="">Select Event Genre</option> 
            <option value="Alternative">Alternative</option>
            <option value="Comedy">Comedy</option>
            <option value="Country">Country</option>
            <option value="EDM">EDM</option>
            <option value="EDM - Bass">EDM - Bass</option>
            <option value="EDM - House">EDM - House</option>
            <option value="Folk">Folk</option>
            <option value="Funk">Funk</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="Indie">Indie</option>
            <option value="Jam">Jam</option>
            <option value="Pop">Pop</option>
            <option value="Reggae">Reggae</option>
            <option value="R&B">R&B</option>
            <option value="Rock">Rock</option>
            <option value="Multi-Genre">Multi-Genre</option>
          </select>
        </div>
        <br/>
        <div className="form-group">
        <h5>Event Poster Link</h5>
          <input
            className="form-control"
            name="giveawayEventPoster"
            type="text"
            placeholder="Event Poster Link"
            value={formData.giveawayEventPoster}
            onChange={handleOnChange}
            required
          />
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">
          Create Giveaway
        </button>
      </form>
    </div>
  );
}

export default CreateGiveaway;
