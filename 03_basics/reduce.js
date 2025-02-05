// const var1 = arr.reduce((i) => ()/{return} , 0)

const nums = [1, 2, 3, 4, 5];
const red = nums.reduce( (acc, currval) => {
    // console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval;
}, 0)
// console.log(red);

const shoppingCart = [
    {
        course : "js",
        price : 299
    },
    {
        course : "cpp",
        price : 1299
    },
    {
        course : "py",
        price : 999
    }
];

const total = shoppingCart.reduce( (acc, item) => {
    console.log(`course : ${item.course} => price : ${item.price}`)
    return acc + item.price;
}, 0);

console.log(`your total bill is ${total}`);

