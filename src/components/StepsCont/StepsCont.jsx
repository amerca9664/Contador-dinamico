import { incSteps, resetIncCounter } from '../actionsFunc';
import Boton from '../Boton/Boton';
import TextLbl from '../TextLbl/TextLbl';

const StepsCont = ({ valNumSteps, setNumSteps }) => {
	const disabStep = valNumSteps === 1 ? true : false;
	return (
		<>
			<TextLbl color='black'>{valNumSteps}</TextLbl>
			<div>
				<Boton disabledSta={false} setValue={setNumSteps} action={incSteps}>
					+{valNumSteps}
				</Boton>
				<Boton
					disabledSta={disabStep}
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
