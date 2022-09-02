import React from "react";
import Routes from "./Routes";
import NavBarIcons from "./components/NavBarIcons";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const notify = () => toast('Yay')
  return (
    <div>
      <Routes />
      <ToastContainer />
      <NavBarIcons />
    </div>
  );
};

export default App;
