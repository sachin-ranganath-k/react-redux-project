import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import List from '../components/List'
import RegisterStudent from '../components/Register'


function LinkRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/register" element={<RegisterStudent />} />
        </Routes>
      </Router>
  )
}

export default LinkRoutes;