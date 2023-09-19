import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './index.css';
import Giveaways from './features/Giveaways';
import GiveawayPage from './features/GiveawayPage';
import GiveawayList from './features/GiveawayList';
import Home from './features/Home';
import NavBar from './features/NavBar';

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
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
