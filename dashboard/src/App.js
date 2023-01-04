import React from 'react';
import './App.css';
import Booking from './pages/Booking'
import Layout from "./layout/Layout";
import Dashboard from './Components/dashboart';

import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
  return (


    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />

        </Routes>
      </Layout>
    </BrowserRouter>


  );
}

export default App;
