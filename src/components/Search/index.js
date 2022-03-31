import './style.scss';
import { IoSearchOutline } from 'react-icons/io5';

export const Search = () => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Search"></input>
      <IoSearchOutline size={25} />
    </div>
  );
};
