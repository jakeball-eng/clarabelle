import Phone from './Components/Phone'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Favorites from './Components/Favorites'
import Profile from './Components/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';

function App() {

  return (
    <StrictMode>
      <div className="sm:hidden bg-background h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
      <div className="hidden sm:block fixed top-0 left-0 w-full h-full">
        <Phone />
      </div>
    </StrictMode>

  )
}

export default App
