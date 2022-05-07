import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../Modal/Modal';
import { SignInForm } from '../SignInForm/SignInForm'
import { SignUpForm } from '../SignUpForm/SignUpForm'
import './AuthPage.css';

export const AuthPage = ({ id }) => {
	const [modal, setModal] = useState(true);
	const navigate = useNavigate();

	const closeModal = () => {
		setModal(false);
		navigate('/');
	};

	return (
		<div className="auth-page">
			{modal && id === "login" && (
				<Modal showModal={modal} closeModal={closeModal}>
					<SignInForm />
				</Modal>
			)}
			{modal && id === "registration" && (
				<Modal showModal={modal} closeModal={closeModal}>
					<SignUpForm />
				</Modal>
			)}
		</div>
	);
};
