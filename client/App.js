import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import NavBarIcons from './components/NavBarIcons';

const App = () => {
  return (
    <div>
      <Routes />
      <Navbar />
      <NavBarIcons />
    </div>
  );
};

export default App;
