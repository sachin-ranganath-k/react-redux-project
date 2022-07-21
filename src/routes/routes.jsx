import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import List from '../components/List'
import Login from '../components/Login'
import RegisterStudent from '../components/Register'


function LinkRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<RegisterStudent />} />
          <Route path="/register" element={<List />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  )
}

export default LinkRoutes;