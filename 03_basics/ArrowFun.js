const user = {
    name : "Viru",
    msg : function(){
        console.log(`${this.name}, welcome.`);
    }
}

// console.log(user.msg());

const fun = function(){
    console.log(this);
}

// fun();

// Arrow Function

const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(3, 5));


// React
const product = (num1, num2) => (num1 * num2);
console.log(product(9, 7));