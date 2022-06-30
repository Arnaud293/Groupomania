import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../../pages/Home'
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import Login from "../../pages/Login";

const index = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        </Routes>
    </BrowserRouter>
  )
}

export default index;
