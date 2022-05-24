import React, { useState } from 'react';
import styled from '@emotion/styled';
import RighMenu from './RighMenu';
import './style.scss';


const StyledBurger = styled.div`

      div {
         background-color: ${({ open }) => open ? '#ccc' : '#333'};

         &:nth-of-type(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
         }

         &:nth-of-type(2) {
            transform: ${({ open }) => open ? 'translateX(-200%)' : 'translateY(0)'};
            opasity: ${({ open }) => open ? 0 : 1};
         }

         &:nth-of-type(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
         }
      }
`

const Burger = () => {

   const [open, setOpen] = useState(false);
   return (
      <>
         <StyledBurger open={open} onClick={() => setOpen(!open)} className="burger">
            <div />
            <div />
            <div />
         </StyledBurger>
         <RighMenu open={open}/>
      </>

   )
}

export default Burger;