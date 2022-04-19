let currentNumber = '';
let prevNumber = '';
let operationOperator = '';
let result = '0';

const screen = document.querySelector('.screen');
const screenCalculator = document.getElementById('screenCalculator');
const screenResult = document.getElementById('screenCalculatorResult');
const screenHistory = document.getElementById('history__container');
const screenBtnCalc = document.getElementById('screenBtnCalc');
const screenBtnConv = document.getElementById('screenBtnConv');
const navbar = document.getElementById('navbar_container');

const btn__history = document.getElementById('btn__history');
const btn__converter = document.getElementById('btn__converter');
const btn__toggleScreen = document.getElementById('btn__toggleScreen');
const btn__backspace = document.getElementById('btn__backspace');

const btn_displayNumber = document.getElementById('btn__left');
const numbers = document.querySelectorAll('.numbers');
const decimal = document.querySelector('.decimal');
const operators = document.querySelectorAll('.operators');
const allClear = document.querySelector('.all_clear');
const plusMinus_sign = document.querySelector('.plusMinus_sign');
const brackets = document.querySelector('.brackets');
const equal_sign = document.querySelector('.equal_sign');
const clearHistory = document.getElementById('clear__history');
const percentage = document.querySelector('.percentage');

btn__history.addEventListener('click', () => {
  btn_displayNumber.classList.toggle('disabled');
  screenHistory.classList.toggle('disabled');
});

const styleScreen = window.getComputedStyle(screen);
const styleNavbar = window.getComputedStyle(navbar);
const stylescreenCalculator = window.getComputedStyle(screenCalculator);
const stylescreenResult = window.getComputedStyle(screenResult);

btn__converter.addEventListener('click', () => {
  screenBtnCalc.classList.toggle('disabled');
  screenBtnConv.classList.toggle('disabled');
  styleNavbar.getPropertyValue('top') == '224px' ? navbar.style.setProperty('top', '313px') : navbar.style.setProperty('top', '224px');
  styleScreen.getPropertyValue('height') == '191px' ? screen.style.setProperty('height', '280px') : screen.style.setProperty('height', '191px');
  if (stylescreenCalculator.getPropertyValue('height') == '98px') {
    screenCalculator.style.setProperty('border-bottom', '1px solid var(--background--third-color)');
    screenCalculator.style.setProperty('height', '43%');
    screenResult.style.setProperty('height', '43%');
  } else {
    screenCalculator.style.setProperty('height', '35%');
    screenResult.style.setProperty('height', '35%');
  }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

btn__toggleScreen.addEventListener('click', () => {
  let isToggleLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isToggleLight) return document.documentElement.setAttribute('data-theme', 'dark');
  return document.documentElement.setAttribute('data-theme', 'light');
});

btn__backspace.addEventListener('click', () => {
  currentNumber = currentNumber.slice(0, -1);
  updateScreen(currentNumber);
});

allClear.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
  updateScreenResult(result);
});

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    result = '0';
    updateScreenResult(result);
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

operators.forEach((operators) => {
  operators.addEventListener('click', (e) => {
    updateScreen(currentNumber);
    inputOperators(e.target.value);
  });
});

equal_sign.addEventListener('click', () => {
  calculate();
  updateScreen(currentNumber);
  updateScreenResult(result);
  const history = {
    firstNumber: prevNumber,
    secondNumber: currentNumber,
    operator: operationOperator,
    result: result,
  };
  putHistory(history);
  renderHistory();
  showBtnClearHistory();
  operationOperator = '';
  currentNumber = '';
});

plusMinus_sign.addEventListener('click', () => {
  if (currentNumber < 0) {
    currentNumber = currentNumber * 1;
  } else {
    currentNumber = currentNumber * -1;
  }
  updateScreen(currentNumber);
});

decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

percentage.addEventListener('click', () => {
  currentNumber = parseInt(currentNumber) / 100;
  updateScreen(currentNumber);
});

clearHistory.addEventListener('click', () => {
  deleteHistory();
  renderHistory();
  showBtnClearHistory();
});

function updateScreen(number) {
  screenCalculator.value = number;
}

function updateScreenResult(number) {
  screenResult.value = number;
}

function inputNumber(number) {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

function clearAll() {
  currentNumber = '';
  prevNumber = '';
  operationOperator = '';
  result = '0';
}

function inputOperators(operator) {
  if (operationOperator === '') {
    prevNumber = currentNumber;
  }
  operationOperator = operator;
  currentNumber = '';
}

function inputDecimal(dot) {
  if (currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
}

function calculate() {
  result = '';
  switch (operationOperator) {
    case '+':
      resultCalc = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      resultCalc = parseInt(prevNumber) - parseInt(currentNumber);
      break;
    case '*':
      resultCalc = parseInt(prevNumber) * parseInt(currentNumber);
      break;
    case '/':
      resultCalc = parseInt(prevNumber) / parseInt(currentNumber);
      break;
    default:
      break;
  }
  result = resultCalc;
}
