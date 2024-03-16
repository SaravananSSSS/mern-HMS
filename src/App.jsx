import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/NewSignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import NewSignUp from './pages/NewSignUp';
import NewSignIn from './pages/NewSignIn';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/newsignin" element={<NewSignIn />} />
    <Route path="/about" element={<About/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/newsignup" element={<NewSignUp/>} />
  </Routes>
  </BrowserRouter>;
  
}

