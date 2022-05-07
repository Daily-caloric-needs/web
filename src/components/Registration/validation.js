export const loginValidation = {
	required: 'Поле обязательно для заполнения',
};

export const passwordValidation = {
	required: 'Поле обязательно для заполнения',
	validate: (value) => {
		if (value.length < 6) {
			return 'Пароль должен быть более 6 символов';
		}
		return true;
	},
};
export const passwordConfirmValidation = {
	required: 'Поле обязательно для заполнения',
	validate: (value) => {
		if (value.length < 6) {
			return 'Пароль должен быть более 6 символов';
		}
		return true;
	},
};

export const emailValidation = {
	required: 'Поле обязательно для заполнения',
	validate: (value) => {
		if (!(/\S+@\S+\.\S+/.test(value))) {
			return 'Email не соответствует формату: example@mail.lo';
		}
		return true;
	},
};
