let tryCount = 0;
let isPasswordCorrect;

do {

  isPasswordCorrect = prompt( 'Please input your password' ) === CORRECT_PASS;

  if (isPasswordCorrect) {
    break;
  }

} while (++tryCount < TRY_LIMIT);

alert( `Password is ${isPasswordCorrect
                      ? 'correct'
                      : 'incorrect'}.` );