const Boton = ({
	valCounter,
	valNumSteps,
	botonType,
	setValue,
	action,
	children
}) => {
	if (botonType === 'step') {
		const disabStep = valNumSteps === 1 ? true : false;
		return (
			<button onClick={() => action(setValue)} disabled={disabStep}>
				{children}
			</button>
		);
	}

	if (botonType === 'count') {
		const disab = valCounter <= 0 ? true : false;
		return (
			<button onClick={() => action(setValue)} disabled={disab}>
				{children}
			</button>
		);
	}
};

export default Boton;
