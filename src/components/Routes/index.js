import { React } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Content } from '../Content/Content';
import { Home } from '../Home';
import { navItems } from '../Navbar/Navbar';

import './style.scss';

export const Routers = () => {


   return (
      <BrowserRouter className="router">

         <Routes>
            <Route exact path="/content" element={<Content />} />
            <Route exact path="/Главная" element={<Home />} />
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   )
}