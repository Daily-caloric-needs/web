import { useNavigate } from 'react-router-dom';
import './style.scss';
import avatar from './woman.png';

export const Avatar = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/avatar")} className="avatar">
      <img src={avatar} alt="avatar" />
    </div>
  );
};
