import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Content } from '../Content/Content';
import { Home } from '../Home/Home';
import { NotFound } from '../NotFound/NotFound'
import './style.scss';

export const Routers = () => {


   return (
      <BrowserRouter className="router">

         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/statistics" element={<Content />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}