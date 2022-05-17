import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export const MenuBurger = () => {
   const navigate = useNavigate();

   const menu = document.querySelector(".menu");
   const menuItems = document.querySelectorAll(".menu-item");
   const hamburger = document.querySelector(".hamburger");
   const closeIcon = document.querySelector(".lnr-cross");
   const menuIcon = document.querySelector(".lnr-menu");

   function toggleMenu() {
      if (menu.classList.contains("show-menu")) {
         menu.classList.remove("show-menu");
         closeIcon.style.display = "none";
         menuIcon.style.display = "block";
      } else {
         menu.classList.add("show-menu");
         closeIcon.style.display = "block";
         menuIcon.style.display = "none";
      }
   }

   hamburger?.addEventListener("click", toggleMenu);

   menuItems.forEach(
      function (menuItem) {
         menuItem?.addEventListener("click", toggleMenu);
      }
   )

   return (
      <div>
         <ul className="menu">
            <li><p className="menu-item" onClick={() => navigate("/")}>Главная</p></li>
            <li><p className="menu-item" onClick={() => navigate("/diary")}>Дневник</p></li>
            <li><p className="menu-item" onClick={() => navigate("/recipes")}>Рецепты</p></li>
            <li><p className="menu-item" onClick={() => navigate("/profile")}>Личный кабинет</p></li>
         </ul>
         <button className="hamburger">
            <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
            <span className="lnr lnr-menu"></span>
            <span className="lnr lnr-cross"></span>
         </button>
      </div>
   )
}