import Typography from '@mui/material/Typography/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useForm, Controller, useFormState } from 'react-hook-form';
import { emailValidation, passwordValidation, loginValidation, passwordConfirmValidation } from '../validation';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

export const SignUpForm = () => {
	const { handleSubmit, control, reset } = useForm();
	const { errors } = useFormState({ control });
	const navigate = useNavigate();

	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setIsError] = useState({ flg: false, message: '' });

	const onSubmit = async (formData) => {
		if (formData.password === formData.password_confirmation) {
			try {
				const { data } = await axios.post('http://213.226.114.162/api/register', { ...formData });
				console.log(data);
				if (data) {
					setIsSuccess(true);
					reset();
				} else {
					setIsError({ flg: true, message: 'Что-то пошло не так' });
				}
			} catch (e) {
				setIsError(e.message);
			}
		} else {
			setIsError({ flg: true, message: 'Пароли отличаются' });
		}
	};

	return (
		<div className="auth-form__form">
			<Typography variant="h4" component="div">
				Регистрация
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name="name"
					rules={loginValidation}
					render={({ field }) => (
						<TextField
							label="Имя"
							size="small"
							margin="normal"
							className="auth-form__input"
							fullWidth={true}
							onChange={(e) => field.onChange(e)}
							value={field.value}
							error={!!errors.login?.message}
							helperText={errors.login?.message}
						/>
					)}
				/>
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
				<Controller
					control={control}
					name="password_confirmation"
					rules={passwordConfirmValidation}
					render={({ field }) => (
						<TextField
							label="Подтвердите пароль"
							type="password"
							size="small"
							margin="normal"
							className="auth-form__input"
							fullWidth={true}
							onChange={(e) => field.onChange(e)}
							value={field.value}
							error={!!errors.passwordConfirmValidation?.message}
							helperText={errors.passwordConfirmValidation?.message}
						/>
					)}
				/>

				<Button type="submit" variant="contained" fullWidth={true} disableElevation={true} sx={{ marginTop: 2 }}>
					Зарегистрироваться
				</Button>
			</form>

			<Typography variant="subtitle1" component="div" gutterBottom={true} className="auth-form__subtitle">
				Зарегистрированы? <Link onClick={() => navigate('/login')}>Войти в систему </Link>
			</Typography>

			{isSuccess && (
				<Typography variant="subtitle1" component="div" gutterBottom={true} className="auth-form__subtitle">
					Регистрация прошла успешно
				</Typography>
			)}

			<Typography variant="subtitle1" component="div" gutterBottom={true} className="auth-form__subtitle">
				{error.flg && <div>{error?.message}</div>}
			</Typography>
		</div>
	);
};
