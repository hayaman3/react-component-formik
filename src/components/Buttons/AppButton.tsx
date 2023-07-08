import classNames from 'classnames';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';

type Themes = 'default' | 'disabled';

const themeRecord: Record<Themes, string> = {
	default: 'bg-gray-800 hover:bg-gray-900 focus:bg-gray-700',
	disabled: 'pointer-events-none bg-gray-300',
};

const fontRecord: Record<Themes, string> = {
	default: 'font-bold text-gray-100',
	disabled: 'font-bold text-gray-800',
};

export type AppButtonProps = {
	theme?: Themes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const AppButton: FunctionComponent<AppButtonProps> = ({
	theme = 'default',
	...props
}) => {
	return (
		<button
			{...props}
			className={classNames(
				'px-5 py-4',
				'rounded-xl',
				'transition',
				'focus:scale-[0.99]',
				props.disabled ? themeRecord.disabled : themeRecord[theme],
				props.disabled ? fontRecord.disabled : fontRecord[theme]
			)}></button>
	);
};

export default AppButton;
