import './App.css';
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Product from './pages/Product';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useEffect, useState } from 'react';

function App() {

  const [loggedUser, setLoggedUser] = useState({})

  useEffect(()=>{
    if(localStorage.getItem("SensorLogin")){
      setLoggedUser(JSON.parse(localStorage.getItem("SensorLogin")))
    }
  },[])

  return (
    <>
      <Navbar loggedUser={loggedUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
