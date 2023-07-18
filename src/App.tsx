import { useState } from 'react';
import LoginPage from './app/login/Page';
import RegistrationPage from './app/registration/Page';
import ToggleSwitch from './components/Buttons/Toggle';

export default function App() {
	const [toggle, setToggle] = useState(true);
	const clickHandler = () => {
		setToggle(!toggle);
	};

	return (
		<main className="flex flex-col items-center justify-between">
			<ToggleSwitch clickHandler={clickHandler} />

			{toggle ? <RegistrationPage /> : <LoginPage />}
		</main>
	);
}
