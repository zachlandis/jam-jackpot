import React, { useEffect, useState } from 'react'
import { fetchGiveaways, updateGiveaway } from './giveawaysSlice'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntry } from '../Entries/EntriesSlice'



function PickWinner({ giveaway, showPickWinnerByGiveaway, setShowPickWinnerByGiveaway }) {
    const [selectedWinner, setSelectedWinner] = useState("")
    const [updatedEntries, setUpdatedEntries] = useState([])

    const dispatch = useDispatch();

    const handleSelectWinner = () => {
        if (giveaway.entries.length === 0) {
          setSelectedWinner("No entries")
          return;
        }

        const randomIndex = Math.floor(Math.random() * giveaway.entries.length);
        const randomWinner = giveaway.entries[randomIndex]
        const randomWinnerId = randomWinner.id

        console.log("RandomWinnerID:", randomWinnerId)

        if (randomWinner && randomWinner.user) {
            const { first_name, last_name, email } = randomWinner.user;
            setSelectedWinner({
              first_name,
              last_name,
              email,
              randomWinnerId,
              
            });
          } else {
            setSelectedWinner("Winner data not available");
          }
        };
    
        const handleMarkWinner = () => {
            if (selectedWinner) {                
              const updatedEntries = giveaway.entries.map((entry) => {
                if (entry.id === selectedWinner.randomWinnerId) {
                  return {
                    ...entry,
                    winner: true,
                  };
                } else {
                  return {
                    ...entry,
                    winner: false,
                  };
                }
              });
            setUpdatedEntries(updatedEntries)
            dispatch(updateEntry({id: selectedWinner.randomWinnerId, ...selectedWinner, winner:true}))
        }
    };
      

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
          {selectedWinner ? (
              <div>
                <p>
                  <strong>Name:</strong> {selectedWinner.first_name} {selectedWinner.last_name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedWinner.email}
                </p>
                <button onClick={handleMarkWinner} className="btn btn-success">Final Winner</button>
              </div>
            ) : (
              <p>No winner selected yet</p>
            )}
            </div>
              <button onClick={handleSelectWinner} className="btn btn-primary">Select Winner</button>
          </div>
        </div>
      </div>
    
  )
}

export default PickWinner