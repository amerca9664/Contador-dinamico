import { incSteps, resetIncCounter } from '../actionsFunc';
import Boton from '../Boton/Boton';
import TextLbl from '../TextLbl/TextLbl';

const StepsCont = ({ valNumSteps, setNumSteps }) => {
	return (
		<>
			<TextLbl>{valNumSteps}</TextLbl>
			<div>
				<Boton botonType='step' setValue={setNumSteps} action={incSteps}>
					+{valNumSteps}
				</Boton>
				<Boton
					valNumSteps={valNumSteps}
					botonType='step'
					setValue={setNumSteps}
					action={resetIncCounter}
				>
					Reset increment
				</Boton>
			</div>
		</>
	);
};

export default StepsCont;
