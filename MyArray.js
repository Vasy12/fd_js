function MyArray() {
  this.length = 0;
}

const myArrProto = new MyArray();

myArrProto.push = function push() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length++] = arguments[i];
  }
  return this.length;
};

myArrProto.shift = function shift() {
  if (this.length === 0) {
    return;
  }
  const firstElem = this[0];

  for (let i = 0; i < (this.length - 1); i++) {
    this[i] = this[i + 1];
  }
  delete this[this.length - 1];
  this.length--;

  return firstElem;

};

myArrProto.concat = function concat() {
  const newArr = new this.constructor();

  for (let i = 0; i < this.length; i++) {
    newArr.push( this[i] );
  }

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof MyArray) {
      for (let j = 0; j < arguments[i].length; j++) {
        newArr.push( arguments[i][j] );
      }
      continue;
    }
    newArr.push( arguments[i] );

  }

  return newArr;
};

MyArray.prototype = myArrProto;