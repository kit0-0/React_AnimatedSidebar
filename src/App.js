
import { BrowserRouter as Router } from "react-router-dom";
import React from 'react'
import SideBar from './components/Sidebar.jsx'


import "./App.css";


function App() {
  return (
    <React.Fragment>
      <Router>

        <SideBar />



      </Router >

    </React.Fragment>
  );
}

export default App;
