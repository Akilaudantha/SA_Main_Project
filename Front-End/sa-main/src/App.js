import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Signup from './Components/LoginSignup/Signup';
import Home from './Components/Home/Home';
<<<<<<< Updated upstream
import Profile from './Components/Profile/Profile'; 
import Editp from './Components/Profile/Editp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import Profile from './Components/Profile/Profile'; // Import Profile

import {BrowserRouter, Routes, Route} from 'react-router-dom';
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
<<<<<<< Updated upstream
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} /> 
          <Route path="/sign" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<Editp />} />
        </Routes>
      </div>
    </BrowserRouter>
=======
    <div>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/sign" element={<Signup />}/>
        <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
      </Routes>

    </div>
  </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
