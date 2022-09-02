import React, { useState } from "react";
import Routes from "./Routes";
import NavBarIcons from "./components/NavBarIcons";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SettingsContext from "./components/Timer/SettingsContext";

const App = () => {
  const [timer, setTimer] = useState(2)
  return (
    <div>
      <SettingsContext.Provider value={{
        timer,
        setTimer
      }}>
        <Routes />
        <ToastContainer />
        <NavBarIcons />
      </SettingsContext.Provider>
    </div>
  );
};

export default App;
