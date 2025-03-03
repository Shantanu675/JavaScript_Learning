// immediatrly invoked function expressions [IIFE]

(function chai(){
    //neme IIFE (becoz it has name)
    console.log(`DB connected`);   
})(); //there is problem due to pollution of global scope so, we use iife to remove pollution of variable or property written there


((name) => {
    console.log(`DB connect ${name}`);
})("hitesh"); // to end iife use semicolon otherwise remaining code not execute properly



