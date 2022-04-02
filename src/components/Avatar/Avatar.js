import './style.scss';
import avatar from './avatar.svg';

export const Avatar = () => {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar" />
    </div>
  );
};
