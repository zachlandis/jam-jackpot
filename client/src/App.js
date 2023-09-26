import React, { useState } from 'react';
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

function App() {
  const [page, setPage] = useState("/")

  return (
    <div>
      <Router>
        <div>
          <NavBar onChangePage={setPage} />
        </div>
        <Routes>
          <Route path="/giveaways/:id" element={<GiveawayPage />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="/admin" element={ <AdminDash />}/>
          <Route path="/auth" elemeent={ <Login /> } />
          <Route path="/logout" elemeent={ <Logout /> } />
          <Route path='users/new' element={ <SignUp /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
