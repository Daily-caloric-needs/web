import { useSelector } from "react-redux";
import { selectUserData } from "../../store/UserData/selectors";
import { AuthPage } from "../Registration";
import { useEffect, useState } from "react";
import { Button, TextField, Typography } from '@mui/material';
import { Avatar } from "../Avatar/Avatar";
import { Notification } from "../Notification/Notification";
import { Sidebar } from "../Sidebar/Sidebar";
import "./style.scss";
import { selectAmountNutrientsFromToday, selectAmountNutrientsNormalFromToday } from "../../store/AmountNutrients/selectors";
import { selectDailyVolume, selectWaterDrunk } from "../../store/Water/selectors";

export const Profile = () => {
  const userData = useSelector(selectUserData());
  const amountNutrientsNorm = useSelector(selectAmountNutrientsNormalFromToday());
  const amountNutrientsFromToday = useSelector(selectAmountNutrientsFromToday());
  const dailyVolumeWater = useSelector(selectDailyVolume);
  const waterDrunk = useSelector(selectWaterDrunk);

  const [ userName, setUserName ] = useState({
    name: userData?.user.name,
    error: false,
    helperText: ''
  });
  const [ userEMail, setUserEMail ] = useState({
    email: userData?.user.email,
    error: false,
    helperText: ''
  });
  const [ userPassword, setUserPassword ] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    errorOldPass: false,
    helperTextForOldPass: '',
    errorNewPass: false,
    helperTextForNewPass: ''
  });
  const [ valueFlg, setValueFlg ] = useState({
    inputNameFlg: false,
    inputEMailFlg: false,
    inputPasswordFlg: false
  });

  useEffect(() => {
    setUserName({...userName, name: userData?.user.name})
    setUserEMail({...userEMail, email: userData?.user.email})
  }, [userData]);

  const changeName = () => {
    setValueFlg({...valueFlg, inputNameFlg: true});
  };

  const saveUserName = () => {
    if (/\S+/.test(userName.name)) {
      setValueFlg({...valueFlg, inputNameFlg: false});
      setUserName({...userName, error: false, helperText: ''});
      // отправка userName на сервер
    } else {
      setUserName({...userName, error: true, helperText: 'Серьезно? Ваше имя - пустая строчка?'});
    }
  };

  const changeEmail = () => {
    setValueFlg({...valueFlg, inputEMailFlg: true});
  };

  const saveUserEMail = () => {
    if (/.+@.+\..+/i.test(userEMail.email)) {
      setValueFlg({...valueFlg, inputEMailFlg: false});
      setUserEMail({...userEMail, error: false, helperText: ''});
      // отправка userEMail на сервер
    } else {
      setUserEMail({...userEMail, error: true, helperText: 'Придерживайтесь mail@mail.ru'});
    }
  };

  const changeUserPassword = () => {
    setValueFlg({...valueFlg, inputPasswordFlg: true});
  }

  const saveUserPassword = () => {
    // сравнить с паролем который придет с сервака?
    if (userPassword.oldPassword === 'ololo') {
      if (userPassword.newPassword.length > 5 && userPassword.confirmPassword.length > 5) {
        if (userPassword.newPassword === userPassword.confirmPassword) {
          setValueFlg({...valueFlg, inputPasswordFlg: false});
          setUserPassword({...userPassword, oldPassword: '', newPassword: '', confirmPassword: '', errorNewPass: false, helperTextForNewPass: '', errorOldPass: false, helperTextForOldPass: ''});
          // отправка newPassword на сервер
        } else {
          setUserPassword({...userPassword, errorNewPass: true, helperTextForNewPass: 'Пароли не совпадают'});
        }
      } else {
        setUserPassword({...userPassword, errorNewPass: true, helperTextForNewPass: 'Хотя бы 6 символов', errorOldPass: false, helperTextForOldPass: ''});
      }
    } else {
      setUserPassword({...userPassword, errorOldPass: true, helperTextForOldPass: 'Не верный пароль'});
    }
  }

  const changeUserNormCalories = () => {
    // запуск калькулятора калорий в модалке
  };

  const changeUserNormWater = () => {
    // запуск калькулятора по воде в модалке
  }

  if(!userData) {
    return <AuthPage id="login"/>
  }

  return (
    <div className="content">
      <div className="content__header">
        <Sidebar />
        <Notification />
        <Avatar />
      </div>
      
      <h1>Ваш профиль</h1>
      <div className="content__profile">
        <div className="content__profile-left">
          <div className="content__box">
            <Typography variant="h6">Имя:</Typography>
            {valueFlg.inputNameFlg ? 
              <TextField 
                variant="outlined"
                size="small"
                helperText={userName.helperText}
                error={userName.error}
                value={userName.name}
                onChange={e => setUserName({...userName, name: e.target.value})}
                autoFocus
              /> : <p>{userName.name}</p>
            }
            {valueFlg.inputNameFlg ? <Button variant="outlined" onClick={saveUserName}>Сохранить</Button> : <Button variant="outlined" onClick={changeName}>Изменить</Button>}
          </div>

          <div className="content__box">
            <Typography variant="h6">Почта:</Typography>
            {valueFlg.inputEMailFlg ? 
              <TextField
                variant="outlined"
                size="small"
                helperText={userEMail.helperText}
                error={userEMail.error}
                value={userEMail.email}
                onChange={e => setUserEMail({...userEMail, email: e.target.value})}
                autoFocus
              /> : <p>{userEMail.email}</p>
            }
            {valueFlg.inputEMailFlg ? <Button variant="outlined" onClick={saveUserEMail}>Сохранить</Button> : <Button variant="outlined" onClick={changeEmail}>Изменить</Button>}
          </div>

          <div className="content__box">
            <Typography variant="h6">Пароль:</Typography>
            {valueFlg.inputPasswordFlg ?
              <div className="password-form">
                <TextField
                  variant="outlined"
                  size="small"
                  type="password"
                  label="Старый пароль"
                  helperText={userPassword.helperTextForOldPass}
                  error={userPassword.errorOldPass}
                  value={userPassword.oldPassword}
                  onChange={e => setUserPassword({...userPassword, oldPassword: e.target.value})}
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  size="small"
                  type="password"
                  label="Новый пароль"
                  helperText={userPassword.helperTextForNewPass}
                  error={userPassword.errorNewPass}
                  value={userPassword.newPassword}
                  onChange={e => setUserPassword({...userPassword, newPassword: e.target.value})}
                />
                <TextField
                  variant="outlined"
                  size="small"
                  type="password"
                  label="Повторите новый пароль"
                  helperText={userPassword.helperTextForNewPass}
                  error={userPassword.errorNewPass}
                  value={userPassword.confirmPassword}
                  onChange={e => setUserPassword({...userPassword, confirmPassword: e.target.value})}
                />
              </div>
              : <p>******</p>
            }
            {valueFlg.inputPasswordFlg ? <Button variant="outlined" onClick={saveUserPassword}>Сохранить</Button> : <Button variant="outlined" onClick={changeUserPassword}>Изменить</Button>}
          </div>
        </div>

        <div className="content__profile-right">
          <div className="content__box">
            <Typography variant="h6">Суточная норма эн.ценности:</Typography>
            <p>{amountNutrientsNorm} ККал</p>
            <Button variant="outlined" onClick={changeUserNormCalories}>Пересчитать</Button>
          </div>

          <div className="content__box">
            <Typography variant="h6">Суточная норма воды:</Typography>
            <p>{dailyVolumeWater} мл</p>
            <Button variant="outlined" onClick={changeUserNormWater}>Пересчитать</Button>
          </div>

          <div className="content__box">
            <Typography variant="h6">Сегодня вы употребили:</Typography>

            <p>{amountNutrientsFromToday.calories ? amountNutrientsFromToday.calories : 0} ККал</p>
          </div>

          <div className="content__box">
            <Typography variant="h6">Сегодня вы выпили воды:</Typography>
            <p>{waterDrunk} мл</p>
          </div>
        </div>
      </div>
    </div>
  );
};
