import { useState } from 'react';
import Boton from '../Boton/Boton';
import TextLbl from '../TextLbl/TextLbl';

let counter = 0;
let numSteps = 1;

const Contenedor = () => {
	const [value, setValue] = useState(0);
	return (
		<>
			<TextLbl>{counter}</TextLbl>
			<div>
				<Boton setValue={setValue} action={decremento}>
					-{numSteps}
				</Boton>
				<Boton setValue={setValue} action={resetCounter}>
					Reset
				</Boton>
				<Boton setValue={setValue} action={incremento}>
					+{numSteps}
				</Boton>
			</div>
			<TextLbl>{counter}</TextLbl>
			<div>
				<Boton setValue={setValue} action={incSteps}>
					+{numSteps}
				</Boton>
				<Boton>Reset increment</Boton>
			</div>
		</>
	);
};

const incremento = (inc, setValue) => {
	counter = counter + inc;
	setValue(counter);
};

const decremento = (decr, setValue) => {
	counter = counter - decr;
	setValue(counter);
};

const resetCounter = (decr, setValue) => {
	counter = 0;
	setValue(counter);
};

const incSteps = (inc, setValue) => {
	numSteps = numSteps + inc;
	setValue(numSteps);
};

export default Contenedor;
