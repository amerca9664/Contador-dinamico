const Boton = ({ botonType, setValue, action, children }) => {
	if (botonType === 'step') {
		return <button onClick={() => action(setValue)}>{children}</button>;
	}

	if (botonType === 'count') {
		return <button onClick={() => action(setValue)}>{children}</button>;
	}
};

export default Boton;
