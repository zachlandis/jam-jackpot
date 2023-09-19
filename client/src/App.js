import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './index.css';
import Giveaways from './features/Giveaways';
import GiveawayPage from './features/GiveawayPage';
import GiveawayList from './features/GiveawayList';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Giveaways />} />
          <Route path="/giveaway/:id" element={<GiveawayPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
