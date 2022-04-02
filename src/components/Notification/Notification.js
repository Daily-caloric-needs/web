import './style.scss';
import { IoNotificationsOutline } from 'react-icons/io5';

export const Notification = () => {
  return (
    <div className="notification">
      <IoNotificationsOutline size={30} />
      <span className="notification__badge"></span>
    </div>
  );
};
