const arr = [1, 2, 3, 4, 5];
// console.log(arr);

const arr2 = new Array(10, 20, 30, 40, 50);
// console.log(arr2);

// Array methods

// .push(value)
// .pop()
// .unshift(9)  => add value from front
// .shift()     => remove value from front
// .includes(value) => asks if that array includes that value or not.
// .indexOf(value)   => returns index of the value


const a = [67, 34, 54, 99, 9];
const b =  a.join();         // joins all elements and then converts into string!!!


//slice and splice

// slice => no change in original array
// splice => changes array

// console.log("A ", arr);
const arr3 = arr.slice(0, 3);
// console.log(arr3);

const arr4 = a.splice(1,3);
console.log(arr4);


