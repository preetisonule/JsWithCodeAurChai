function calCartPrice(...value){
    return value;
}
// ... => rest operator

// console.log(calCartPrice(100,200,300,8000));
// [ 100, 200, 300, 8000 ]

const obj = {
    name : "Viru",
    age : "13"
}

function passObj(anyobj){
    return `this user have name ${obj.name} and age ${obj.age}.`;
}

console.log(passObj(obj));
