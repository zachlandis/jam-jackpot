import React from "react";
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import UserEntries from "./UserEntries";
import UserPrizes from "./UserPrizes";

function Home() { 
    const currentUser = useSelector((state) => state.users.currentUser);
    

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
                    <UserEntries currentUser={currentUser}/>
                    <UserPrizes currentUser={currentUser}/>
                </div>
            ) : (
                <h1>Please login to access this page</h1>
            )}
        </div>
    );
}

export default Home;