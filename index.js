const firstInput = prompt( 'Please input your first number value' );
const firstNumber = Number( firstInput );

if (!isNaN( firstNumber )) {

  const secondInput = prompt( 'Please input your second number value' );
  const secondNumber = Number( secondInput );
  if (!isNaN( secondNumber )) {

    const operationMark = prompt( 'Please choose your operation (*, /, +, -)' );
    let operationFunc;
    switch (operationMark) {
      case '+': {
        operationFunc = sum;
      }
        break;
      case '-': {
        operationFunc = subtraction;
      }
        break;
      case '*': {
        operationFunc = multiple;
      }
        break;
      case '/': {
        operationFunc = division;
      }
        break;
      default:
        alert( 'Unknown option' );
    }

    if (typeof operationFunc === 'function') {
      alert( operationFunc( firstNumber, secondNumber ) );
    }
    /*
     * YOUR CODE IS HERE!
     * */

  }

}

function sum(a, b) {
  return a + b;
}

function multiple(a, b) {
  return a * b;
}

function subtraction(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}
