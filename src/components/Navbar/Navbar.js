import "./style.scss";
import {
  IoPieChartOutline,
  IoHomeOutline,
  IoSettingsOutline,
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
  },
  //   {
  //     name: "Настройки",
  //     icon: <IoSettingsOutline size={30} />,
  //   },
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
