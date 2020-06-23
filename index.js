/**
 *
 * @param {number} base
 * @param {number} power
 * @return {number}
 */
function pow(base, power) {

  if (power < 0) {
    return 1 / pow( base, Math.abs( power ) );
  }

  let result = base;

  for (let i = 1; i < power; ++i) {
    result *= base;
  }

  return result;
}

console.log( 'pow( 2, 3 ) = ', pow( 2, 3 ) );// 8;
console.log( 'pow( 14, 0 ) = ', pow( 14, 0 ) );// 1;
console.log( 'pow( 14, 0 ) = ', pow( 2, -3 ) );// 1 / 8;

/**
 *
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n < 3) {
    return 1;
  }

  let result;
  let prev1 = 1;
  let prev2 = 1;

  for (let i = 2; i < n; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }

  return result;
}

console.log( fib( 8 ) );//21
console.log( fib( 11 ) );//89
