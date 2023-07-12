import React, {
	FunctionComponent,
	InputHTMLAttributes,
	RefObject,
	useMemo,
	useRef,
	useState,
} from 'react';
import classNames from 'classnames';

export type TextInputProps = {
	error?: boolean | string;
	block?: boolean;
	label: string;
	value: string | number | undefined;
	onChangeText?: (text: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: FunctionComponent<TextInputProps> = ({
	label,
	value,
	onChangeText = () => {
		return;
	},
	error = false,
	block = true,
	...props
}) => {
	const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	const [isFocused, setIsFocused] = useState(false);
	const isOpen = useMemo(() => {
		if (isFocused) {
			return true;
		}
		if (inputRef.current?.value) {
			return true;
		}
		return false;
	}, [isFocused]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChangeText) {
			onChangeText(e.target.value);
		}
		if (props.onChange) {
			props.onChange(e);
		}
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (props.onBlur) {
			props.onBlur(e);
		}
		setIsFocused(false);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	return (
		<div
			className={classNames(
				'relative',
				'rounded-2xl bg-gray-200',
				block ? 'w-full' : 'w-fit'
			)}>
			<span
				className={classNames(
					'pointer-events-none absolute left-4 top-1/2 -translate-y-1/2',
					'transition',
					isOpen ? 'opacity-0' : 'opacity-100',
					isOpen ? 'scale-0' : 'scale-100',
					'text-sm font-bold text-gray-600'
				)}>
				{label}
			</span>

			<label
				className={classNames(
					'pointer-events-none absolute left-4 top-2 text-xs font-bold text-gray-600',
					'transition',
					isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
				)}>
				{label}
			</label>

			<input
				{...props}
				ref={inputRef}
				className={classNames(
					'h-full w-full rounded-xl px-4 pb-2.5 pt-6 transition',
					'bg-gray-200 hover:bg-gray-300'
				)}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default TextInput;
