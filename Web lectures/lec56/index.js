// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Piyush Yadav");
//     // resolve(1001);
//     reject(new Error("Internet Server Error"));
// });

// function sayMyName() {
//     console.log("My name is Piyush Yadav");
// }

// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(sayMyName, 15000);
//     resolve(1);
// });

// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve(10);
//     }
//     else{
//         reject("Internal Server Error")
//     }
// });

// promise1.then((message) => {
//     console.log("first msg " + message);
//     return 20;
// }).then((message) => {
//     console.log("second msg " + message);
//     return 30;
// }).then((message) => {
//     console.log("third msg " + message); 
// }).catch((error) => {
//     console.log(error);
// }).finally((message) => {
//     console.log("Mai to final hu, chalunga pkka")
// })

// promise1.then((message) => {
//     console.log("Then ka message is " + message);
// }).catch((error) => {
//     console.log("Error " + error);
// })

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, "Third");
});

Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log(values);
})
.catch((error) => {
    console.error("Error " + error)
})