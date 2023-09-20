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
      total_entries: 0,
    };
    dispatch(createGiveaway(payload));

    setFormData({
      giveawayTitle: '',
      giveawayEventDate: '',
      giveawayEventVenue: '',
      giveawayEventLocation: '',
      giveawayEventPoster: '',
    });
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">New Giveaway</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="form-group">
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
        <button type="submit" className="btn btn-primary">
          Create Giveaway
        </button>
      </form>
    </div>
  );
}

export default CreateGiveaway;
