import { useState } from 'react';

import StepsCont from '../StepsCont/StepsCont';
import CounterCont from '../CounterCont/CounterCont';

const Contenedor = () => {
	const [valCounter, setCounter] = useState(0);
	const [valNumSteps, setNumSteps] = useState(1);
	return (
		<>
			<CounterCont
				valCounter={valCounter}
				setCounter={setCounter}
				valNumSteps={valNumSteps}
			></CounterCont>
			<StepsCont
				valNumSteps={valNumSteps}
				setNumSteps={setNumSteps}
			></StepsCont>
		</>
	);
};

export default Contenedor;
