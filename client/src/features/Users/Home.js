import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "./UsersSlice";
import { ClipLoader } from 'react-spinners';

function Home( { currentUser }) { 

return(
    <div>
        {currentUser ? (
            <div>
                <h2>Welcome, {currentUser.first_name}</h2>
            </div>
        ) : (
            <h1>Please login to access this page</h1>
        )}
        
    </div>
)
}

export default Home;