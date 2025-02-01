// const tinder = new Object(); => singleton
const tinder = {};
tinder.id = "123@";
tinder.name = "pratish";
tinder.isLoggedIn = true;

// console.table(tinder);

// nested object

const user = {
    name1 : {
        fullname :{
            firsttname : "Prisha",
            lastname :"Biranje"
        }
    }
}

// console.log(user.name1);
// console.log(user.name1.fullname);
// console.log(user.name1.fullname.firsttname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Best 
const obj4 = {...obj1, ...obj2}

// Database

const users = [
    {
        id : 1,
        email1 : "preeti@gmail.com"
    },
    {
        id : 2,
        email1 : "preeti@gmail.com"
    },
    {
        id : 3,
        email1 : "preeti@gmail.com"
    }
]
// array ke andar object.

// console.log(tinder);
// console.log(Object.keys(tinder));
// [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinder));
// [ '123@', 'pratish', true ]

console.table(Object.entries(tinder));
