import logo from './logo.svg';
import Main from './pages/Main'
import Blog from './pages/Blog'
import About from './pages/About'


import ReactDOM from "react-dom/client";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './NavBar';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);