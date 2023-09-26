import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "./UsersSlice";
import { ClipLoader } from 'react-spinners';

function Home() {
    
    const loading = useSelector((state) => state.users.status === 'loading');
    const currentUser = useSelector((state) => state.users.currentUser)

    return (
        <div>
            <h1>HOME!</h1>
            <h2>Welcome, {currentUser.first_name}</h2>
        </div>
    )
}

export default Home;