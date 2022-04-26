import { useNavigate } from 'react-router-dom';

import './style.scss';
import { IoFastFoodOutline } from 'react-icons/io5';

export const Logo = () => {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate("/")} className="logo">
      <IoFastFoodOutline size={40} />
    </div>
  );
};
