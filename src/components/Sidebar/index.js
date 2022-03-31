import { Logo } from '../Logo';
import { Logout } from '../Logout';
import { Navbar } from '../Navbar';
import './style.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Navbar />
      <Logout />
    </div>
  );
};
