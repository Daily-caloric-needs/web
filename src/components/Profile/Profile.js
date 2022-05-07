import { useSelector } from "react-redux";
import { selectUserData } from "../../store/UserData/selectors";
import { AuthPage } from "../Registration";

export const Profile = () => {
  const userData = useSelector(selectUserData());

  if(!userData) {
    return <AuthPage id="login"/>
  }

  return (
    <div>
      <div>Страница профиль, че</div>
      <div>Приветствую вас, {userData.user.name}</div>
    </div>
  )
};
