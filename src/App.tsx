import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;