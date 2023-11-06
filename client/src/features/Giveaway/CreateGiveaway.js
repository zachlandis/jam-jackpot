import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGiveaway } from './giveawaysSlice';

function CreateGiveaway() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.giveaways.error); // Select the error from Redux state


  const [formData, setFormData] = useState({
    title: '',
    event_date: '',
    event_venue: '',
    event_location: '',
    event_poster: '',
    genre: '',
    number_of_tickets: '',
    redemption_instructions: '',
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
      title: formData.title,
      event_date: formData.event_date,
      event_venue: formData.event_venue,
      event_location: formData.event_location,
      event_poster: formData.event_poster,
      genre: formData.genre,
      number_of_tickets: formData.number_of_tickets,
      redemption_instructions: formData.redemption_instructions,
      total_entries: 0,
    };
    dispatch(createGiveaway(payload));

    setFormData({
      title: '',
      event_date: '',
      event_venue: '',
      event_location: '',
      event_poster: '',
      genre: '',
      number_of_tickets: '',
      redemption_instructions: '',
    });
  }

  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <h5>Giveaway Title</h5>
            <input
              className="form-control"
              name="title"
              type="text"
              placeholder="Giveaway Title"
              value={formData.title}
              onChange={handleOnChange}
              required
            />
          </div>
          <br/>
          <div className="form-group">
          <h5>Event Date</h5>
            <input
              className="form-control"
              name="event_date"
              type="date"
              placeholder="Event Date"
              value={formData.event_date}
              onChange={handleOnChange}
              required
            />
          </div>
          <br/>
          <div className="form-group">
          <h5>Event Venue</h5>
            <input
              className="form-control"
              name="event_venue"
              type="text"
              placeholder="Event Venue"
              value={formData.event_venue}
              onChange={handleOnChange}
              required
            />
          </div>
          <br/>
          <div className="form-group">
          <h5>Event Location</h5>
            <input
              className="form-control"
              name="event_location"
              type="text"
              placeholder="Event City, State"
              value={formData.event_location}
              onChange={handleOnChange}
              required
            />
          </div>
          <br/>
          <div className="form-group">
          <h5>Event Poster Link</h5>
            <input
              className="form-control"
              name="event_poster"
              type="text"
              placeholder="Event Poster Link"
              value={formData.event_poster}
              onChange={handleOnChange}
              required
            />
          </div>
          <br/>
          <div className="form-group">
            <h5>Event Genre</h5>
            <select
              className="form-control"
              name="genre"
              type="dropdown"
              placeholder="Event Genre"
              value={formData.genre}
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
            <h5>Prize Ticket Quantity</h5>
            <select
              className="form-control"
              name="number_of_tickets"
              type="dropdown"
              placeholder="Prize Ticket Quantity"
              value={formData.number_of_tickets}
              onChange={handleOnChange}
              required
            >
              <option value="">0</option> 
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <br/>
          <div className="form-group">
          <h5>Prize Redemption Instructions</h5>
            <input
              className="form-control"
              name="redemption_instructions"
              type="text"
              placeholder="Redemption Instructions"
              value={formData.redemption_instructions}
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
    </div>
  );
}

export default CreateGiveaway;
