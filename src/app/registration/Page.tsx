'use client';
import { FunctionComponent } from 'react';
import RegistrationForm from './_components/Form';
import Stack from '../../components/Layout/Stack';

export type RegistrationPageProps = {
	// No Props
};

const RegistrationPage: FunctionComponent<RegistrationPageProps> = () => {
	const handleSubmit = (formData: any) => {
		console.log(formData);
	};

	return (
		<div className="mx-auto w-96">
			<Stack className="space-y-4">
				<h1>Registration</h1>
				<RegistrationForm onSubmit={handleSubmit} />
			</Stack>
		</div>
	);
};

export default RegistrationPage;
