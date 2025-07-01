
let counter = 0;
let numSteps = 1;

const incremento = (setValue) => {
	counter = counter + numSteps;
	setValue(counter);
};

const decremento = (setValue) => {
	counter = counter - numSteps;
    if (counter <= 0){
        counter =0;
    }

	setValue(counter)
};

const resetCounter = (setValue) => {
	counter = 0;
	setValue(counter);
};

const incSteps = (setValue) => {
	numSteps = numSteps + 1;
	setValue(numSteps);
};

const resetIncCounter = (setValue) => {
	numSteps = 1;
	setValue(numSteps);
};

export {incremento, decremento, resetCounter, incSteps, resetIncCounter}