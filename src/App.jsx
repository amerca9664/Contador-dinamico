import Contenedor from './components/Contenedor/Contenedor';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<h1>Curso de React</h1>
			<Contenedor></Contenedor>
		</div>
	);
};

export default App;
