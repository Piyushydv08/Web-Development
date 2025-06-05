// let obj = {
//     name: "Piyush Yadav",
//     age: 25,
//     weight: 65,
//     height: "5ft 8in",
//     greet: function(){
//         console.log("Hello Jii Kyaa haal chaal");
//     }
// };

// for(let key in obj){
//     console.log(key, " ", obj[key]);
// }

// console.log(obj);
// obj.greet();

// let obj2 = obj;

//-------ARRAYS--------
// let arr = [1,2,3,4,5];

// let brr = new Array("Piyush", 1, true);

// console.log(brr);
// console.log(brr[2]);

// brr.push("Yadav");
// brr.pop()

// brr.shift();
// brr.unshift("Name");
// brr.push(20,40,50);
// // console.log(brr.slice(2,4));
// brr.splice(1,0,"Piyush");
// console.log(brr);

// let arr = [10,20,30,11,21,44,51];

//----MAP----
// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
//     console.log(number+1);
// })

// let ansArray = arr.map((number) => {
//     return number*number;
// })
// console.log(ansArray);

//-----FILTER-----
// let evenArray = arr.filter((number) => {
//     if(number%2 === 0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(evenArray);

//------REDUCE------
// let arr = [10,20,30,40];

// let ans = arr.reduce((acc,curr) => {
//     return acc+curr;
//     //value store in accumulator after one iteration
// }, 0);
// console.log(ans);

//-----SORTING------
// let arr = [4,62,79,453,890,3,6];
// arr.sort();
// console.log(arr);
// console.log(arr.indexOf(9));
// console.log("Length : " , arr.length);

// let arr = [10, 20, 30, 40];
// arr.forEach((value,index) => {
//     console.log("Number : ", value, "index : " , index);
// })

// for(let value of arr){
//     console.log(value);
// }

let arr = [10,20,30,40,50];

function getSum(arr){
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}
let totalSum = getSum(arr);
console.log(totalSum);