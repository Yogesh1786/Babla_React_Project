import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Parent from './components/parents';
import Stoppage from './components/stoppage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/stoppage" element={<Stoppage />} />
      </Routes>
    </div>
  );
};

export default App;
