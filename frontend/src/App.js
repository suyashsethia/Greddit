import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Switch, Route, Link , useLocation } from 'react-router-dom';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState, useEffect } from 'react';
import Auth from './components/Auth';

function App() {
 
  const [user, setuser] = useState({})

  return (
    <Router>
      <div className='App flex flex-col min-h-screen'>
        <Navbar user={user} setuser={setuser}/>
        <Routes>
          <Route exact path="/" element={<Profile user={user}></Profile>} ></Route>
          <Route path='/auth' element={<Auth ></Auth>} ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
