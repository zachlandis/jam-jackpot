import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './index.css';
import Giveaways from './features/Giveaways';
import GiveawayPage from './features/GiveawayPage';
import GiveawayList from './features/GiveawayList';
import Home from './features/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path="/giveaways/:id" element={<GiveawayPage />} />
          <Route path="/giveaways" element={<Giveaways />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
