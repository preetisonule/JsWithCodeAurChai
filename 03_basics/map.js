const nums = [1, 2, 3, 4, 5, 6];

const myNums = nums.map( (num)=> num + 10);
// console.log(myNums);

// chaining  ==> map().map().filter()

const chain = nums.
                map((num) => num*10).
                map( (num) => num+1).
                filter( (num)=> {
                    if(num>40){
                        return num;
                    }
                })

console.log(chain);

                
