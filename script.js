let incrementor ='';
let formerOperator = '';
let operator = '';
let displayedText = "";

let countOperators = 0;
let operand = 0;
let result = 0;

let buttonNumber = document.querySelectorAll(".numberButton");
let buttonOperator = document.querySelectorAll(".operatorButton");
let resultText = document.querySelector(".result");


//let partOne = '';
//let partTwo = '';
//let buttonEqual = document.querySelector(".equalButton");

buttonNumber.forEach((button) => {
  button.addEventListener('click', () => {
    incrementor += clickHandler(event);
    displayedText = incrementor
    resultText.textContent = displayedText;
    console.log("displayed text: " + displayedText)
    console.log("incrementor: " + incrementor)
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
          result = result / operand;
          break;
        default:
          result = result;
      }
    }
    console.log("result :" + incrementor + " operator :" + operator + " operand: " + operand)
    displayedText = result
    resultText.textContent = displayedText;
    incrementor = '';
    operand = 0;
  });
});

// //buttonEqual.addEventListener('click', () => {
//     partTwo = incrementor
//     switch (operator) {
//       case '+':
//         result = partOne + partTwo;
//         break;
//       case '-':
//         result = partOne - partTwo;
//         break;
//       case '*':
//         result = partOne * partTwo;
//         break;
//       default:
//         result = partOne / partTwo;
//     }
//     result = result.toFixed(2);
//     displayedText += " = " + result
//     resultText.textContent = displayedText;
//   });


function clickHandler(event) {
  //console.log(event.target.id)
  return event.target.id
  //return partOne
}
