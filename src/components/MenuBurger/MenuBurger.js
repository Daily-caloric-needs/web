import React, {useState} from 'react';
import './style.scss';
import styled from '@emotion/styled';
import Burger from './Burger';

export const MenuBurger = () => {

   const [open, setOpen] = useState(false);

   const ButtonCss = styled.button`
   transform: ${({ open }) => open ? 'translateX(0)' : 'traslate(100%)'};
   
   `

   return (
      <div>
         <Burger />
         <ButtonCss open={open} onClick={() => setOpen(!open)} className="hamburger">
         </ButtonCss>
      </div>
   )
}