import './style.scss';
import avatar from './woman.png';

export const Avatar = () => {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar" />
    </div>
  );
};
