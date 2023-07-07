import React, { FunctionComponent } from 'react';
import Stack from '../Layout/Stack';

export type FormControlProps = {
	children: React.ReactNode;
	error?: string;
};

const FormControl: FunctionComponent<FormControlProps> = ({
	children,
	error = '',
}) => {
	return (
		<Stack className="space-y-1">
			{children}
			<div className="text-red-500">{error}</div>
		</Stack>
	);
};

export default FormControl;
