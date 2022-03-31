import './style.scss';
import {
  IoPieChartOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { NavItem } from '../NavItem';

const navItems = [
  {
    name: 'Home',
    active: true,
    icon: <IoHomeOutline size={30} />,
  },
  {
    name: 'Stat',
    active: false,
    icon: <IoPieChartOutline size={30} />,
  },
  {
    name: 'Settings',
    active: false,
    icon: <IoSettingsOutline size={30} />,
  },
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
