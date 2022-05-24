import React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../Navbar/Navbar';
import { Avatar } from '../Avatar/Avatar';
import { Logout } from '../Logout/Logout';
import { Recipes } from '../Recipes/Recipes';
import './style.scss';


const Ul = styled.ul`

   transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
   display: ${({ open }) => open ? 'flex' : 'none'};

   li{
      color: #fff;
   }
`

const RighMenu = ({ open }) => {

   return (
      <Ul open={ open } className="menu">
         <Navbar />
         <Recipes />
         <br />
         <Avatar />
         <br />
         <Logout />
         <br />
      </Ul>
   )
}
export default RighMenu;