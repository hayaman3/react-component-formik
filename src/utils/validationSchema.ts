import * as Yup from 'yup';

const phoneRegExp = /^(09|\+639)\d{9}$/;

const validationSchema = Yup.object<FormData>({
	username: Yup.string().required(),
	email: Yup.string().email(),
	phone: Yup.string().matches(phoneRegExp, 'Invalid Phone').required(),
	firstName: Yup.string().required(),
	lastName: Yup.string().required(),
	password: Yup.string()
		.required()
		.min(8, 'Password must be atleast 8 characters')
		.max(50)
		.label('Password')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
			'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
		),
	confirmPassword: Yup.string()
		.required()
		.oneOf([Yup.ref('password')], 'Password does not match'),
});

export default validationSchema;
