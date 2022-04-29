import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Avatar } from '../Avatar/Avatar';
import { Content } from '../Content/Content';
import { Home } from '../Home/Home';
import { NotFound } from '../NotFound/NotFound';
import { Registration } from '../Registration/Registration';
import './style.scss';

export const Routers = () => {

   return (
      <BrowserRouter className="router">
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/statistics" element={<Content />} />
            <Route exact path="/registration" element={<Registration />} />
            {/* <Route exact path="/avatar" element={<Avatar />}/> */}
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}