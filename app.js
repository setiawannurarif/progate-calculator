let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let resultCalc = '';

const calculatorScreen = document.querySelector('.calc_value');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    updateScreen(event.target.value);
  });
});

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
    console.log('assign: ' + currentNumber);
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

equalSign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
  currentNumber = '';
});

const calculate = () => {
  let result = '';
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
  currentNumber = result;
  calculationOperator = '';
  console.log('Result: ' + currentNumber);
};

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = '';
  calculationOperators = '';
  currentNumber = '0';
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
