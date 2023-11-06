import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "./UsersSlice";
import { ClipLoader } from 'react-spinners';

function Home() { 
    const currentUser = useSelector((state) => state.users.currentUser);
    const [userPrizes, setUserPrizes] = useState([]);
    const dispatch = useDispatch();

    if (!currentUser) {
        return (
            <div className="home-container loading">
                <ClipLoader color="#36D7B7" size={150} loading={true} />
            </div>
        );
    }
    console.log(currentUser.prev_wins)

    return (
        <div className="home-container">
            {currentUser ? (
                <div>
                    <h1 className="welcome-header">Welcome, {currentUser.first_name}</h1>
                    <div className="entries-section">
                        <h2>Your Entries</h2>
                        {currentUser.entries && currentUser.entries.length > 0 ? (
                            <ul>
                            {Array.from(new Set(currentUser.entries.map((entry) => entry.giveaway?.title))).map((title) => (
                                <li key={title}>
                                    <a href={`/giveaways/${currentUser.entries.find((entry) => entry.giveaway?.title === title).giveaway?.id}`}>
                                        {title}
                                    </a>
                                </li>
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
                            {currentUser.prev_wins.map((win) => (
                                <li key={win.prize?.id}>
                                    <a href={`/giveaways/${win.prize.giveaway?.id}`}>
                                        {win.prize?.prize_name}
                                    </a>
                                </li>
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