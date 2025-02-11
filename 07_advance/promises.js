// creating promise
const promiseOne = new Promise(function(resolve, reject){
    // Do a async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log('Async Task is completed');
        resolve();
    },1000)
});

// consuming promise
promiseOne.then(function(){
    // console.log('Promise consumed');
});

// minimized way
new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('Aync task 2 completed.');
        resolve();
    },1000)
}).then(function(){
    // console.log('Promise Two consumed.');
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log('Async task 3 completed.');
        resolve({'user': 'Me', 'email':'abc@gmail.com'});
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
})


// chaining
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'preeti', age: 18});
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
})
.then((username)=>{
    // console.log(username);
})
.catch(function(error){
    // console.log(error);  
}).finally(()=>{
    // console.log("resolved or rejected.")
})


// using async await
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:'javascript', age: 70});
        }
        else{
            reject('ERROR JS: something went wrong')
        }
    },1000)
})

async function consumepromiseFive(){
    try {
        const response = await promiseFive;
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumepromiseFive()


// using fetch
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log('E: ',error);
    }
}
// getAllUsers()


// fetch
fetch('https://jsonplaceholder.typicode.com/users')   // why .then()?? fetch returns promise
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})


