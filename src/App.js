//import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import React from 'react'
//import PhoneSignUp from "./components/PhoneSignUp";
//import OtpReact from './components/OtpReact';
import SideBar from './components/Sidebar.jsx'
//import Navigation from "./components/Navigation";

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