function MyArray() {

  this.length = 0;

  this.push = function push(item) {

    this[this.length++] = item;

  };

}

const myArr1 = new MyArray();



const arr1 = [];


for (let i = 0; i < 10; i++) {
  myArr1.push( `Item '${i}'` );
  arr1.push( `Item '${i}'` );
}

const myArr2 = new MyArray();



const arr2 = [];


for (let i = 0; i < 10; i++) {
  myArr2.push( `Item '${i}'` );
  arr2.push( `Item '${i}'` );
}
