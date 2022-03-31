const calculatorScreen = document.querySelector('.calc_value');
const resultScreen = document.querySelector('.calc_sum');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const updateScreenResult = (number) => {
  resultScreen.value = number;
};

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    updateScreen(event.target.value);
  });
});

prevNumber = '';
calculationOperator = '';
currentNumber = '0';
resultCalc = '0';

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
  updateScreenResult(resultCalc);
  currentNumber = '';
});

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const inputOperators = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '0';
};

operators.forEach((operators) => {
  operators.addEventListener('click', (event) => {
    inputOperators(event.target.value);
  });
});

const calculate = () => {
  console.log(prevNumber);
  console.log(currentNumber);
  result = '';
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case '*':
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    case '/':
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    default:
      break;
  }
  resultCalc = result;
  calculationOperator = '';
};

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
  updateScreenResult(resultCalc);
});

const clearAll = () => {
  prevNumber = '';
  calculationOperator = '';
  currentNumber = '0';
  resultCalc = '0';
};

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
};

percentage.addEventListener('click', () => {
  currentNumber = parseInt(currentNumber) / 100;
  updateScreen(currentNumber);
});
