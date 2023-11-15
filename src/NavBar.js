import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";


function Navbar() {
    let navigate = useNavigate()
    const navHome = () => {navigate('/')}
    const navBlog = () => {navigate('/Blog')}
    const navAbout = () => {navigate('/About')}


  return (
    <div className="navbar">
      <div className="logo">
        My Logo
      </div>
      <div className="nav-links">
        <a onClick={navHome} className="active">Home</a>
        <a onClick={navBlog}>Blog</a>
        <a onClick={navAbout}>About</a>
      </div>
    </div>
  );
}

export default Navbar;
