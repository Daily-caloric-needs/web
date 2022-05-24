import Typography from "@mui/material/Typography/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useForm, Controller, useFormState } from "react-hook-form";
import { emailValidation, passwordValidation } from "../validation";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInForm.scss";
import { useDispatch } from "react-redux";
import { addUserData } from "../../../store/UserData/actions";
import { API } from "../../../constants";

export const SignInForm = ({ closeModal }) => {
  const { handleSubmit, control } = useForm();
  const { errors } = useFormState({ control });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setIsError] = useState();

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(`${API}/login`, { ...formData });
      if (data) {
        localStorage.setItem("userData", JSON.stringify(data));
        dispatch(addUserData(data));
        navigate("/profile");
      } else {
        setIsError("Что-то пошло не так");
      }
    } catch (e) {
      setIsError(e.message);
    }
  };

  return (
    <div className="auth-form__form">
      <Typography variant="h4" component="div">
        Войдите
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className="auth-form__subtitle"
      >
        Чтобы получить доступ
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={emailValidation}
          render={({ field }) => (
            <TextField
              label="Email"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="Пароль"
              type="password"
              size="small"
              margin="normal"
              className="auth-form__input"
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{ marginTop: 2 }}
        >
          Войти
        </Button>
        <Button
          variant="outlined"
          fullWidth={true}
          disableElevation={true}
          sx={{ marginTop: 1 }}
          onClick={closeModal}
        >
          Отмена
        </Button>
      </form>

      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom={true}
        className="auth-form__subtitle"
      >
        Не можете войти?{" "}
        <Link onClick={() => navigate("/registration")}>
          Зарегистрироваться
        </Link>
      </Typography>

      {error && <div>Что-то пошло не так, попробуйте обновить страницу</div>}
    </div>
  );
};
