
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import { useState } from 'react';
import { BrowserRouter as Router, Route ,Routes ,Link } from 'react-router-dom'

function App() {
  const[state, setState] = useState('')
 
  return (
    <div className="App">
      
      <Router>
      <Link to="/about">About Page</Link>
      <Link to="/profile">Profile Page</Link>
        <Routes>  
          <Route element={<About/>} path="/about"  />
          <Route element={<Profile/>} path="/profile"  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
