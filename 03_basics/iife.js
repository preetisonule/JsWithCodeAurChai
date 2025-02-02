// immediatly invoked function expression
// immediatly invoke krne ke liye toh ye hota hi hai,
// plus global scope variables ke plloution ko hatane ke liye IIFE use krte hai

//    |- ()() -|
// fun         execution

(
    function myName(){
        console.log("Hiii Preeti");
    }
)();

(
    () => {
        console.log("Database Connected.")
    }
)();