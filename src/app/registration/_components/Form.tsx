import { FunctionComponent } from 'react';

export type RegistrationFormProps = {
	onSubmit: (form: FormData) => void;
};

const RegistrationForm: FunctionComponent<RegistrationFormProps> = ({
	onSubmit,
}) => {
	return (
		<form>
			<input type="text" />
			<button type="submit">Submit</button>
		</form>
	);
};

export default RegistrationForm;
