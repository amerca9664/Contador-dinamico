import { decremento, incremento, resetCounter } from '../actionsFunc';
import TextLbl from '../TextLbl/TextLbl';
import Boton from '../Boton/Boton';

const CounterCont = ({ valCounter, setCounter, valNumSteps }) => {
	const disabStep = valCounter <= 0 ? true : false;
	const isEven = valCounter % 2 === 0 ? true : false;
	const ChangeColor = isEven && !disabStep ? 'red' : 'black';
	return (
		<>
			<TextLbl color={ChangeColor}>{valCounter}</TextLbl>
			<div>
				<Boton
					disabledSta={disabStep}
					setValue={setCounter}
					action={decremento}
				>
					-{valNumSteps}
				</Boton>
				<Boton
					disabledSta={disabStep}
					setValue={setCounter}
					action={resetCounter}
				>
					Reset
				</Boton>
				<Boton disabledSta={false} setValue={setCounter} action={incremento}>
					+{valNumSteps}
				</Boton>
			</div>
		</>
	);
};

export default CounterCont;
