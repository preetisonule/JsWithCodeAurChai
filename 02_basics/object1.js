// singleton : constructur tarike se object declare kiya to singleton
// singleton : sirf ek
// object litral => not singleton

// object literals

const mysym = Symbol("value1");
const jsUser = {
    name : "Aarav",
    age : 9,
    [mysym] : "value2",     // Interview : Syntax yaad rakhna
    location : "Tasgoan",
    email : "Aarav@gmail.com",
    isAdult : false
}


// console.log(jsUser["email"]);
// console.log(jsUser[mysym]);

// changing values 

jsUser.email = "viru@gmail.com";

// freez : kuch change nahi hoga erroe nahi milega but chang nahi hoga

// Object.freeze(jsUser);
// console.log(jsUser);

// function 

jsUser.greetings1 = function(){
    console.log("Hello there!");
}

jsUser.greetings2 = function(){
    console.log(`Hello my dear ${this.name}! nice to meet you!`);
}
// console.log(jsUser.greetings);   // undefined\
console.log(jsUser.greetings1());    // Hello there!
console.log(jsUser.greetings2());    // Hello there!
