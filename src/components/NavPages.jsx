import React from 'react'
import {  Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";


const NavPages = () => {
  return (
    


      <section>
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<> not found</>} />

          </Routes>
      </section>
    

   
  )
}

export default NavPages