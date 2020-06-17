/**
 *
 * @param {number} n
 * @returns {boolean}
 */
function isEven (n) {

  return n % 2 === 0;
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {null|number[]}
 */
function sqrtEquation (a, b, c) {

  const d = b * b - 4 * a * c;

  if (d < 0) {
    return null;
  }

  const x1 = (-b + Math.sqrt( d )) / 2 * a;
  const x2 = (-b - Math.sqrt( d )) / 2 * a;

  return [x1, x2];
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} - min value
 */
function getMinValue (a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} - max value
 */
function getMaxValue (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}