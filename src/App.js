import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import Profile from './component/Profile';
import FirstScene from './gameFiles/01firstScene';
import SecondScene from './gameFiles/02insideCave';
import ThirdScene from './gameFiles/03leftRoom';
import FourthScene from './gameFiles/04straight';
import FifthScene from './gameFiles/05rightRoom';
import ExitScene from './gameFiles/06exitCave';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <Profile /> */}

          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/outside-cave" element={<FirstScene />} /> 
            <Route path="/inside-cave" element={<SecondScene />} />
            <Route path="/left-room" element={<ThirdScene />} />
            <Route path="/straight" element={<FourthScene />} />
            <Route path="/right-room" element={<FifthScene />} />
            <Route path="/exit-cave" element={<ExitScene />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;