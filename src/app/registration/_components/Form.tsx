import { FunctionComponent } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormControl from '../../../components/Forms/FormControl';
import TextInput from '../../../components/Forms/Input';
import AppButton from '../../../components/Buttons/AppButton';
import Stack from '../../../components/Layout/Stack';

export type RegistrationFormProps = {
	onSubmit: (form: FormData) => void;
};

export interface FormData {
	username: string;
	phone: number | undefined;
	firstName: string;
	lastName: string;
	password: string;
	confirmPassword: string;
}

const phoneRegExp = /^(09|\+639)\d{9}$/;

export const validationSchema = Yup.object<FormData>({
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

const RegistrationForm: FunctionComponent<RegistrationFormProps> = ({
	onSubmit,
}) => {
	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={{
				username: '',
				email: '',
				phone: undefined,
				firstName: '',
				lastName: '',
				password: '',
				confirmPassword: '',
			}}
			onSubmit={onSubmit}>
			{({
				handleSubmit,
				handleChange,
				handleBlur,
				isSubmitting,
				errors,
				touched,
				values,
			}) => (
				<form
					onSubmit={e => {
						e.preventDefault();
						handleSubmit(e);
					}}
					className="w-full">
					<Stack className="space-y-4">
						<Stack className="space-y-2">
							<FormControl error={touched.username ? errors.username : ''}>
								<TextInput
									type="text"
									id="username"
									name="username"
									label="USERNAME"
									value={values.username}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormControl>
							<FormControl error={touched.email ? errors.email : ''}>
								<TextInput
									type="text"
									id="email"
									name="email"
									label="EMAIL"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormControl>

							<FormControl error={touched.phone ? errors.phone : ''}>
								<TextInput
									type="tel"
									id="phone"
									name="phone"
									label="MOBILE"
									value={values.phone}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormControl>
							<FormControl error={touched.firstName ? errors.firstName : ''}>
								<TextInput
									type="text"
									id="firstName"
									name="firstName"
									label="FIRST NAME"
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormControl>

							<FormControl error={touched.lastName ? errors.lastName : ''}>
								<TextInput
									type="text"
									id="lastName"
									name="lastName"
									label="LAST NAME"
									value={values.lastName}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</FormControl>
						</Stack>
						<AppButton type="submit" disabled={isSubmitting}>
							Sign in
						</AppButton>
					</Stack>
				</form>
			)}
		</Formik>
	);
};

export default RegistrationForm;
