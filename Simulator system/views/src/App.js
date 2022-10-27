import React from 'react'
import './/App.css';
import Simulator from './pages/Simulator';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Simulator/>} />
        </Routes>
      </div>
    </>
  )
}

export default App