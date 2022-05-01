export const loginValidation = {
	required: 'Поле обязательно для заполнения',
	validate: (value) => {
		if (value.match(/[а-яА-Я]/)) {
			return 'Логин не может содержать русские буквы';
		}
		return true;
	},
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
		if (value.search(/\S+@\S+\.\S+/)) {
			return 'Email не соответствует формату: example@mail.lo';
		}
		return true;
	},
};
