import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './calendar.css'; // Import the CSS for styling
import CalendarT from './calender.jsx';
import logo from './assets/logo.png'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div></div> */}
    <div>
      <header>
        <nav className="fixed-nav-bar">
          <div className="logo">
            <img src={logo} width='90' height='90' alt="EduTask Logo" className="logo-image"></img>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/profile">Profile</a>
          </div>


        </nav>
      </header>

      {/* Calendar Component */}
      <CalendarT />
    </div>


  </StrictMode>
);
