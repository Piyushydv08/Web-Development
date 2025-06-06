// let obj = {
//     age : 20,
//     wt : 70,
//     ht : 170
// }
// console.log(obj);
// obj.color = "White";
// console.log(obj);

//-----Spread operator object cloning
// let src = {
//     age : 20,
//     wt : 70,
//     ht : 170
// }
// let dest = {...src};
// src.age = 90;
// console.log("src", src)
// console.log("dest", dest);

//------Assign object cloning
// let src = {
//     age : 20,
//     wt : 70, 
//     ht : 170
// }
// let src2 = {
//     value:101,
//     name: "Piyush Yadav"
// }
// let dest = Object.assign({}, src, src2);
// src.age = 90;
// console.log("src", src)
// console.log("dest", dest);

//--------Iteration method for object cloning
// let src = {
//     age : 20,
//     wt : 70, 
//     ht : 170
// };
// let dest = {};
// for(let key in src) {
//     let newKey = key;
//     let newValue = src[key];
//     dest[newKey] = newValue; 
// }
// src.age = 90;
// console.log("src", src)
// console.log("dest", dest);