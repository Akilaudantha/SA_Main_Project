
import './App.css';

import LoginSignup from './Components/LoginSignup/LoginSignup';
import Signup from './Components/LoginSignup/Signup';
import Home from './Components/Home/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>

      <Routes>
        <Route path="/jj" element={<Home />}/>

        <Route path="/login" element={<LoginSignup />} />

        <Route path="/" element={<Signup />}/>

        
      </Routes>

    </div>
  </BrowserRouter>
      
      
    
  );
}

export default App;
