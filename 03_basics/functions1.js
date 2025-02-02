function myName(name){
    console.log(name);
}

const name = "Vihaan";
// myName => referance
// myName(name); // => execution

// -----------------------------------

function addNum(num1, num2){
    return num1 + num2;
}
const sum = addNum(2,4);
// console.log(sum);

// -----------------------------------

function loggedIn(username = "InstaUser"){
    if(username === undefined){
        console.log("Please Enter your name!");
    }
    else{
        return `${username} just logged in.`;
    }
}

// console.log(loggedIn());

