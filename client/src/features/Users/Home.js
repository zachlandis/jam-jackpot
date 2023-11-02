import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "./UsersSlice";
import { ClipLoader } from 'react-spinners';

function Home() { 
    const currentUser = useSelector((state) => state.users.currentUser);
    const [userPrizes, setUserPrizes] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserPrizes = async () => {
            try {
                const response = await fetch('/api/user_prizes'); 
                if (response.ok) {
                    const data = await response.json();
                    setUserPrizes(data.prizes);
                } else {
                    console.error('Error fetching user prizes');
                }
            } catch (error) {
                console.error('Error fetching user prizes', error);
            }
        };

        fetchUserPrizes();
    }, []); 

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
                        {userPrizes && userPrizes.length > 0 ? (
                            <ul>
                            {userPrizes.map((prize) => (
                                <li key={prize.id}>
                                    <a href={`/giveaways/${prize.giveaway.id}`}>
                                        {prize.giveaway.title}
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
