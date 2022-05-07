import { useNavigate } from 'react-router-dom';
import './style.scss';
import avatar from './woman.png';
import { useSelector } from "react-redux";
import { selectUserData } from "../../store/UserData/selectors";

export const Avatar = () => {
  const navigate = useNavigate();
  const userData = useSelector(selectUserData());

  return (
    <div onClick={() => navigate("/profile")} className="avatar">
      <img src={avatar} alt="avatar" />
      <p>{userData?.user.name}</p>
    </div>
  );
};
