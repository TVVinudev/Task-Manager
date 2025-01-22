import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import View from './pages/View';

const App = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/view' element={<View />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
