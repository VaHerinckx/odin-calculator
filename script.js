let incrementor ='';
let formerOperator = '';
let operator = '';

let countOperators = 0;
let operand = 0;
let result = 0;

let buttonNumber = document.querySelectorAll(".numberButton");
let buttonOperator = document.querySelectorAll(".operatorButton");
let buttonReset = document.querySelector(".resetButton");
let resultText = document.querySelector(".result");

resultText.textContent = "0";

buttonNumber.forEach((button) => {
  button.addEventListener('click', () => {
    incrementor += clickHandler(event);
    resultText.textContent = incrementor;
    operand = +incrementor
  });
});

buttonOperator.forEach((button) => {
  button.addEventListener('click', () => {
    countOperators += 1;
    formerOperator = operator;
    operator = clickHandler(event);
    if (countOperators === 1) {
      result = operand;
    }
    else {
      switch (formerOperator) {
        case '+':
          result = result + operand;
          break;
        case '-':
          result = result - operand;
          break;
        case '*':
          result = result * operand;
          break;
        case '/':
          result = (result / operand);
          break;
        default:
          result = result;
        }
      }
      if (result === Infinity || result === -Infinity) {
        resultText.textContent = "You can't divide by zero, idiot"
        result = 0;
      }
      else {
        resultText.textContent = (result % 1 !== 0) ? result.toFixed(2) : result;
      }
      incrementor = '';
      operand = 0;
  });

buttonReset.addEventListener('click', () => {
    operand = 0;
    incrementor = '';
    result = 0;
    countOperators = 0;
    resultText.textContent = '0'
  });
});

function clickHandler(event) {
  return event.target.id
}
