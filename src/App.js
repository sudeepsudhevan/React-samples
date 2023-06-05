
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import { useState } from 'react';
import { Route ,Routes ,Link , useNavigate } from 'react-router-dom'

function App() {
  const[state, setState] = useState('')
  const navigate = useNavigate()
  return (
    <div className="App">
      <button onClick={() => navigate('/about')}>About Me</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
        <Routes>  
          <Route element={<About/>} path="/about" />
          <Route element={<h1>Yup.., you have been hacked</h1>} path="/profile"  />
        </Routes>
      
    </div>
  );
}

export default App;
