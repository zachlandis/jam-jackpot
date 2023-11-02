import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "./UsersSlice";
import { ClipLoader } from 'react-spinners';


function Home() { 
    const currentUser = useSelector((state) => state.users.currentUser)

    console.log(currentUser)

    // Loading state while fetching data
    if (!currentUser) {
        return (
            <div className="home-container loading">
                <ClipLoader color="#36D7B7" size={150} loading={true} />
            </div>
        );
    }

    return (
        <div className="home-container">
            {currentUser ? (
                <div>
                    <h1 className="welcome-header">Welcome, {currentUser.first_name}</h1>
                    <div className="entries-section">
                        <h2>Your Entries</h2>
                        {currentUser.entries && currentUser.entries.length > 0 ? (
                            <ul>
                                {currentUser.entries.map((entry) => (
                                    <li key={entry.id}>{entry.giveaway?.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No entries found.</p>
                        )}
                    </div>
                    <div className="prizes-section">
                        <h2>Your Prizes</h2>
                        {currentUser.prev_wins && currentUser.prev_wins.length > 0 ? (
                            <ul>
                                {currentUser.prev_wins.map((win, index) => (
                                    <li key={index}>{win}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No prizes found.</p>
                        )}
                    </div>
                </div>
            ) : (
                <h1>Please login to access this page</h1>
            )}
        </div>
    );
}

export default Home;
