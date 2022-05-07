import { Logo } from '../Logo/Logo';
import { Logout } from '../Logout/Logout';
import { Navbar } from '../Navbar/Navbar';
import './style.scss';

export const Sidebar = () => {


  return (
    <div className="sidebar">
      <Logo />
      <Navbar />
      <Logout/>
    </div>
  );
};
