import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
            <Router>
              
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/add" element={<AddUser />} />
                    <Route path="/edit/:id" element={<EditUser />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
