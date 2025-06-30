const Boton = ({ setValue, action, children }) => {
	return <button onClick={() => action(1, setValue)}>{children}</button>;
};

export default Boton;
