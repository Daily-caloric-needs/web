import './style.scss';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const Notification = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/calculator")} className="notification">
      <IoNotificationsOutline size={30} />
      <span className="notification__badge"></span>
    </div>
  );
};
