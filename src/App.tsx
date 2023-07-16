import LoginPage from './app/login/Page';
import RegistrationPage from './app/registration/Page';
import ToggleSwitch from './components/Buttons/Toggle';

export default function App() {
	return (
		<main className="flex flex-col items-center justify-between">
			<ToggleSwitch />
			<RegistrationPage />
			<LoginPage />
		</main>
	);
}
