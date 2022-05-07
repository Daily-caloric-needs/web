import "./style.scss";
import {
  IoPieChartOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { NavItem } from "../NavItem/NavItem";

export const navItems = [
  {
    name: "Главная",
    icon: <IoHomeOutline size={30} />,
    link: "/",
  },
  {
    name: "Дневник",
    icon: <IoPieChartOutline size={30} />,
    link: "/statistics",
  }
];

export const Navbar = () => {
  return (
    <ul className="navbar">
      {navItems.map((navItem, idx) => {
        return <NavItem key={idx} navItem={navItem} />;
      })}
    </ul>
  );
};
