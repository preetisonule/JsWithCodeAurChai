const marvel = ["ironman","spiderman","cap"];
const dc = ["batman","flash","superman"];

// marvel.push(dc);
// console.log(marvel);

// [ 'ironman', 'spiderman', 'cap', [ 'batman', 'flash', 'superman' ] ]

// note that if we push an array to another array, it will consider array as an input.

const heros = marvel.concat(dc);
// console.log(heros);
// [ 'ironman', 'spiderman', 'cap', 'batman', 'flash', 'superman' ]
// Fine....


// spread operator
const newHeros = [...marvel,...dc]; // kanch ka glass lo fod do spread ho jayega...
// console.log(newHeros);
//[ 'ironman', 'spiderman', 'cap', 'batman', 'flash', 'superman' ]
// Best


// Flat
// suppose you have array into array => multiple array in array. and you want to spread out, we use flat method.
const multipleArr = [1,1,3,[1,2],[3,4,[7,8]]]; // sheesh.....
const simpleArr = multipleArr.flat(Infinity);
console.log(simpleArr);
// [
//     1, 1, 3, 1, 2,
//     3, 4, 7, 8
// ]



// Web Scraping
console.log(Array.isArray("Preeti")); // false
console.log(Array.from("Preeti"));    // [ 'P', 'r', 'e', 'e', 't', 'i' ]

// important

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]

