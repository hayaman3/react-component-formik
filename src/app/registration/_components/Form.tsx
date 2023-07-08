import { FunctionComponent } from 'react';
import { Formik } from 'formik';
import FormControl from '../../../components/Forms/FormControl';
import TextInput from '../../../components/Forms/TextInput';
import AppButton from '../../../components/Buttons/AppButton';
import Stack from '../../../components/Layout/Stack';

export type RegistrationFormProps = {
	onSubmit: (form: FormData) => void;
};

export interface FormData {
	username: string;
	phone: number;
	firstName: string;
	lastName: string;
	password: string;
	rePassword: string;
}

const RegistrationForm: FunctionComponent<RegistrationFormProps> = ({
	onSubmit,
}) => {
	return (
		<Formik
			initialValues={{
				username: '',
				phone: 0,
				firstName: '',
				lastName: '',
				password: '',
				rePassword: '',
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
