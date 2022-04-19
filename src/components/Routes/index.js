import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Content } from '../Content/Content';
import { Home } from '../Home';
import {NotFound} from '../NotFound'

import './style.scss';

export const Routers = () => {


   return (
      <BrowserRouter className="router">

         <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/statistics" element={<Content />} />
            <Route path="/" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}