import { useNavigate } from 'react-router-dom';
import './style.scss';

export const NavItem = ({ navItem }) => {
  const navigate = useNavigate();


  return (
    <li
      className={
        navItem.active ? 'navbar__item navbar__item-active' : 'navbar__item'
      }
    >
      {navItem.icon}
      <p onClick={()=> {
        switch (navItem.name) {
          case "Главная":
            navigate("/");
            break;
          case "Статистика":
            navigate("/statistics");
            break;
          default:
            navigate("/")
        }
      }} className="navbar__name">{navItem.name}</p>
    </li>
  );
};
