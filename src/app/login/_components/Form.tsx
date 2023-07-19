import { FunctionComponent } from 'react';
import { Formik } from 'formik';
import validationSchema from '../../../utils/validationSchema';
import FormControl from '../../../components/Forms/FormControl';
import TextInput from '../../../components/Forms/Input';
import AppButton from '../../../components/Buttons/AppButton';
import Stack from '../../../components/Layout/Stack';

export type RegistrationFormProps = {
	onSubmit: (form: FormData) => void;
};

export interface FormData {
	username: string;
	password: string;
}

const LoginForm: FunctionComponent<RegistrationFormProps> = ({ onSubmit }) => {
	return (
		<Formik
			validationSchema={validationSchema}
			initialValues={{
				username: '',
				password: '',
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
							<FormControl error={touched.password ? errors.password : ''}>
								<TextInput
									type="password"
									id="password"
									name="password"
									label="PASSWORD"
									value={values.password}
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

export default LoginForm;
