import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Parent from './components/parents';
import Stoppage from './components/stoppage';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/parent" element={<Parent />} />
        <Route path="/stoppage" element={<Stoppage />} />
      </Routes>
    </div>
  );
};

export default App;
