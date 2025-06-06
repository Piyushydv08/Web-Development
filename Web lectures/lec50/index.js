//compile time error
//syntax error
//console.log(1;

//Runtime error
//Reference error
// console.log(x);

// try{
//     console.log("Try block starts here");
//     console.log(x);
//     //error -> reference error
//     console.log("Try block ends here")
//     //a

//     //b

//     //c
// }
// catch(err){
//     //define krte h, error ke saath aapko kya krna hai
//     //retry logic
//     //fallback mechanism
//     //logging
//     //custom error
//     console.log("I am inside catch block");
//     console.log("Your error is here", err);
// }
// finally{
//     console.log("I will run everytime, as i am finally block")
// }

//Let's create a custom error
// try{
//     //reference error
//     console.log(x);
// }
// catch(err) {
//     throw new Error("Bhai pehele declare karo, fir print karna")
// }

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid Json");
}