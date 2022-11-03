import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./NavBar";

function Sidebar() {
    return (
        <>
            <div className="child">
            <Router>
            <Navbar />
            <Routes>
              <Route path='/' />
            </Routes>
          </Router>
            </div>
        </>
    )
}

export default Sidebar