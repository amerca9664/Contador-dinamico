import { decremento, incremento, resetCounter } from '../actionsFunc';
import TextLbl from '../TextLbl/TextLbl';
import Boton from '../Boton/Boton';

const CounterCont = ({ valCounter, setCounter, valNumSteps }) => {
	return (
		<>
			<TextLbl>{valCounter}</TextLbl>
			<div>
				<Boton botonType='count' setValue={setCounter} action={decremento}>
					-{valNumSteps}
				</Boton>
				<Boton botonType='count' setValue={setCounter} action={resetCounter}>
					Reset
				</Boton>
				<Boton botonType='count' setValue={setCounter} action={incremento}>
					+{valNumSteps}
				</Boton>
			</div>
		</>
	);
};

export default CounterCont;
