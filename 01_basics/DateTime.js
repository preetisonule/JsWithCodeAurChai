// let mydate = new Date();
// console.log(mydate.toDateString());              // Fri Jan 31 2025      
// console.log(mydate.toISOString());               // 2025-01-31T07:27:49.797Z
// console.log(mydate.toJSON());                    // 2025-01-31T07:27:49.797Z
// console.log(mydate.toLocaleDateString());        // 1/31/2025
// console.log(mydate.toLocaleString());            // 1/31/2025, 7:27:49 AM


// Type of date is Object.

let newDate = new Date("2015-01-14");
// console.log(newDate.toDateString());

let mytimestamp = Date.now();
// console.log(mytimestamp);
// console.log(newDate.getTime());

// console.log(Math.round((Date.now())/1000));


let date1 = new Date();
// console.log(date1.getFullYear());           // current year
// console.log(date1.getDay());                // current day
// console.log(date1.getMonth() + 1);          // current month

console.log(`Today is ${date1.getDate()} and month of ${(date1.getMonth())+1} and year of ${date1.getFullYear()}`);

