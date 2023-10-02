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
import { useDispatch } from 'react-redux';

function App() {
  const [page, setPage] = useState("/")
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);



  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadCurrentUser());
  // }, [dispatch]);

  useEffect(() => {
    fetch('/current_user_info')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('User not authenticated');
        }
      })
      .then((data) => {
        setCurrentUser(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setCurrentUser(null)
        setLoading(false)
      });
  }, []);

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
          <NavBar onChangePage={setPage} currentUser={currentUser}/>
        </div>
        <Routes>
          <Route path="/giveaways/:id" element={<GiveawayPage />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="/admin" element={ <AdminDash />}/>
          <Route path="/login" element={ <Login currentUser={currentUser} /> } />
          <Route path="/logout" element={ <Logout setCurrentUser={setCurrentUser}/> } />
          <Route path='users/new' element={ <SignUp /> } />
          <Route path='/' element={ <Home currentUser={currentUser}/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
