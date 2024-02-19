import React from 'react'
import Register from "./Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile.jsx"
const App = () => {
  return (
    <>
     <Router>
          <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Profile" element={<Profile/>} />
          </Routes>
        </Router>
        
    </>
  )
}

export default App
