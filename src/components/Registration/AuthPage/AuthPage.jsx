import { SignInForm } from '../SignInForm/SignInForm'
import { SignUpForm } from '../SignUpForm/SignUpForm'
import './AuthPage.css';

export const AuthPage = () => {
	return (
		<div className="auth-page">
			<SignInForm />
			<SignUpForm />
		</div>
	);
};
