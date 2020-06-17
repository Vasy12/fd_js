function isEven (n) {

  return n % 2 === 0;
}

function sqrtEquation (a, b, c) {

  const d = b * b - 4 * a * c;

  if (d < 0) {
    return null;
  }

  const x1 = (-b + Math.sqrt( d )) / 2 * a;
  const x2 = (-b - Math.sqrt( d )) / 2 * a;

  return [x1, x2];
}

