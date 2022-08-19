import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  return (
    <div className="app-div">
      <Routes />
      <Navbar />
    </div>
  );
};

export default App;
