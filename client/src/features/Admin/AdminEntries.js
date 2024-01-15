import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntries } from "../Reducers/EntriesSlice";
import { ClipLoader } from 'react-spinners';

function AdminEntries() {

    const dispatch = useDispatch();
    const entries = useSelector((state) => state.entries.entities);
    const loading = useSelector((state) => state.entries.status === 'loading');

    useEffect(() => {
        dispatch(fetchEntries());
    }, [dispatch]);

    if (loading) {
        return (
          <div className="loading-spinner-container">
            <div className="loading-spinner">
              <ClipLoader loading={loading} size={150} color={'#123abc'} />
            </div>
          </div>
        );
      }


    return (
        <div className="table-container">
        <table className="table table-striped">
            <thead className="table-header">
              <tr>
                <th>Giveaway</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Entry Date</th>
                <th>Prize</th>
                <th>Win?</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.giveaway.title} - {entry.giveaway.event_venue} - {entry.giveaway.event_date}</td>
                  <td>{entry.user.first_name}</td>
                  <td>{entry.user.last_name}</td>
                  <td>{entry.user.phone}</td>
                  <td>{entry.user.email}</td>
                  <td>{entry.entry_date}</td>
                  <td>
                      {entry.giveaway && entry.giveaway.prize ? (
                          entry.giveaway.prize.number_of_tickets
                      ) : (
                          "N/A"
                      )}
                  </td>
                  <td>{entry.winner ? "Y" : "N"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default AdminEntries;