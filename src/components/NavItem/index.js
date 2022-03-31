import './style.scss';

export const NavItem = ({ navItem }) => {
  return (
    <li
      className={
        navItem.active ? 'navbar__item navbar__item-active' : 'navbar__item'
      }
    >
      {navItem.icon}
      <p className="navbar__name">{navItem.name}</p>
    </li>
  );
};
