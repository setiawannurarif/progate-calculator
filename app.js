const calculatorScreen = document.querySelector('.calc_value');

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll('.numbers');

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    updateScreen(event.target.value);
  });
});

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let resultCalc = '';

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
  }
};

const inputOperators = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '0';
};

const operators = document.querySelectorAll('.operators');

operators.forEach((operators) => {
  operators.addEventListener('click', (event) => {
    console.log(event.target.value);
    inputOperators(event.target.value);
  });
});

const equalSign = document.querySelector('.equal-sign');

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

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = '';
  calculationOperators = '';
  currentNumber = '0';
};

const decimal = document.querySelector('.decimal');

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

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', () => {
  let resultPercentage = (currentNumber = parseInt(currentNumber) / 100);
  updateScreen(resultPercentage);
});
