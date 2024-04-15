import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '/src/Navbar.jsx';
import AppRoutes from '/src/routes.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;