import { useNavigate } from 'react-router-dom';

import './style.scss';
import { IoServerOutline } from 'react-icons/io5';

export const Recipes = () => {
   const navigate = useNavigate();

   return (
      <div onClick={() => navigate("/recipes")} className="recipes">
         <IoServerOutline size={40} />
      </div>
   );
};
