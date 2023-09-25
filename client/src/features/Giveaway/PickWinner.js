import React, { useEffect } from 'react'
import { fetchGiveaways } from './giveawaysSlice'
import { useDispatch, useSelector } from 'react-redux'



function PickWinner({ giveaway, showPickWinnerByGiveaway, setShowPickWinnerByGiveaway }) {

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{giveaway.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{giveaway.event_venue}</h6>
            <h6 className="card-subtitle mb-2 text-muted">{giveaway.event_date}</h6>
            <button className="btn btn-secondary" onClick={() => setShowPickWinnerByGiveaway(!showPickWinnerByGiveaway)}>
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <p>This winner was randomly selected</p>
            <p><strong>RANDOMLY SELECTED WINNER</strong></p>
            <div>
              <button className="btn btn-primary">Select New Winner</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PickWinner