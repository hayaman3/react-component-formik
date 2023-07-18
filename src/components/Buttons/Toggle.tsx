// import { useState, ChangeEvent } from "react";
import classNames from 'classnames';
import { FunctionComponent } from 'react';

interface ToggleProps {
	clickHandler: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
}

const ToggleSwitch: FunctionComponent<ToggleProps> = ({ clickHandler }) => {
	return (
		<button
			onClick={clickHandler}
			className={classNames(
				'px-5 py-4',
				'rounded-xl',
				'transition',
				'focus:scale-[0.99]',
				'bg-gray-800',
				'hover:bg-gray-900',
				'focus:bg-gray-700',
				'font-bold',
				'text-gray-100'
			)}>
			Toggle
		</button>
	);
};

export default ToggleSwitch;
