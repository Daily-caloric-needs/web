import "./style.scss";
import { IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { selectToken, selectUserData } from "../../store/UserData/selectors";
import { useNavigate } from "react-router-dom";
import { deleteUserData } from "../../store/UserData/actions";
import axios from "axios";
import { API } from "../../constants";
export const Logout = () => {
  const userData = useSelector(selectUserData());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken());

  const logout = () => {
    // отправка токена на сервеp
    axios.post(`${API}/logout`, 0, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("userData");
    dispatch(deleteUserData());
    navigate("/");
  };

  return (
    <>
      {userData ? (
        <div className="logout" onClick={logout}>
          <IoLogOutOutline size={30} />
          Выход
        </div>
      ) : (
        <div className="logout" onClick={() => navigate("/login")}>
          <IoLogInOutline size={30} />
          Вход
        </div>
      )}
    </>
  );
};
