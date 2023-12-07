import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserDashboard from './DashComps/UserDashboard';
import ClientDashboard from './DashComps/ClientDashboard';
import AdminDashboard from './DashComps/AdminDashboard';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
