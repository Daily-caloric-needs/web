import { useNavigate, useLocation } from "react-router-dom";
import "./style.scss";

export const NavItem = ({ navItem }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <li
      onClick={() => {
        navigate(navItem.link);
      }}
      className={
        navItem.link === location.pathname
          ? "navbar__item navbar__item-active"
          : "navbar__item"
      }
    >
      {navItem.icon}
      <p className="navbar__name">{navItem.name}</p>
    </li>
  );
};
