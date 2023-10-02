import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Giveaways from './features/Giveaway/Giveaways';
import GiveawayPage from './features/Giveaway/GiveawayPage';
import Home from './features/Users/Home';
import NavBar from './features/NavBar';
import AdminDash from './features/AdminDash';
import SignUp from './features/Users/SignUp';
import Login from './features/Users/Login';
import Logout from './features/Users/Logout';
import { loadCurrentUser } from './features/Users/UsersSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [page, setPage] = useState("/")
  // const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users.currentUser)


  useEffect(() => {
    dispatch(loadCurrentUser())
    setLoading(false)
  }, [dispatch]);

  useEffect(() => {
    console.log("currentUser:", currentUser);
  }, [currentUser]);
  
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <Router>
        <div>
          <NavBar onChangePage={setPage}/>
        </div>
        <Routes>
          <Route path="/giveaways/:id" element={<GiveawayPage />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="/admin" element={ <AdminDash />}/>
          <Route path="/login" element={ <Login /> } />
          <Route path="/logout" element={ <Logout/> } />
          <Route path='users/new' element={ <SignUp /> } />
          <Route path='/' element={ <Home/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
