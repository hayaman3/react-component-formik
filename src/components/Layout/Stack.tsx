import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

export type StackProps = {
	children: React.ReactNode;
	className?: string;
};

const Stack: FunctionComponent<StackProps> = ({ children, className = '' }) => {
	return (
		<div className={classNames('flex flex-col', className)}>{children}</div>
	);
};

export default Stack;
