'use client';
import { FunctionComponent } from 'react';
import LoginForm from './_components/Form';
import Stack from '../../components/Layout/Stack';

export type RegistrationPageProps = {
	// No Props
};

const LoginPage: FunctionComponent<RegistrationPageProps> = props => {
	const handleSubmit = (formData: any) => {
		console.log(formData);
	};

	return (
		<div className="mx-auto w-96">
			<Stack className="space-y-4">
				<h1>Login</h1>
				<LoginForm onSubmit={handleSubmit} />
			</Stack>
		</div>
	);
};

export default LoginPage;
