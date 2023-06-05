
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import { useState } from 'react';
import { Route ,Routes ,Link , useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext';

function App() {
  const[state, setState] = useState(33)
  
  const navigate = useNavigate()
  return (
    <div className="App">
      <button onClick={() => navigate('/about')}>About Me</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={() => navigate('/profil')}>Profile hacked</button>
      <AppContext.Provider value={{data:state}}>
      <Routes>  
        <Route element={<About/>} path="/about" />
        <Route element={<h1>Yup.., you have been hacked</h1>} path="/profil"  />
        <Route element={<Profile></Profile>} path="/profile">
        </Route>  
      </Routes>
      </AppContext.Provider>
   </div>
  );
}

export default App;
