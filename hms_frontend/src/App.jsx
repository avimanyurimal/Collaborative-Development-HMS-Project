import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '/src/Navbar.jsx';
import AppRoutes from '/src/routes.jsx';

// App.jsx

function App() {
  return (
    <Router>
      <Navbar />   {/* Keep this line */}
      <AppRoutes />   {/* Keep this line */}
    </Router>
  );
}

export default App;

