import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "./UsersSlice";
import { ClipLoader } from 'react-spinners';

function Home() {
    
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [dispatch]);
    
    // const loading = useSelector((state) => state.users.status === 'loading');

    // if (loading) {
    //     return (
    //     <div className='loading-spinner-container'>
    //         <div className='loading-spinner'>
    //         <ClipLoader loading={loading} size={150} color={'#123abc'} />
    //         </div>
    //     </div>
    //     );
    // }

    return (
        <h1>HOME!</h1>
    )
}

export default Home;