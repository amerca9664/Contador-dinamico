const Boton = ({ disabledSta, setValue, action, children }) => {
	return (
		<button onClick={() => action(setValue)} disabled={disabledSta}>
			{children}
		</button>
	);
};

export default Boton;
