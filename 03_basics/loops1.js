// for of loop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(greet);
}

const map = new Map();
map.set("preeti", "sonule");
map.set("ayush", "patil");
map.set("vihaan", "shinde");

for (const [key, value] of map) {
    // console.log(`${key} - ${value}`);
}


// for in loop

const obj = {
    name : "preeti",
    age : 19
}
for (const key in obj) {
   console.log(`${key} = ${obj.key}`);
}
