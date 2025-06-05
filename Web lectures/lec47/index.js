// class Human {
//     //properties
//     age = 25;
//     #wt = 80; //using # we made wt private
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.#wt = newWeight;
//         this.ht = newHeight;
//     }

//     //behaviour
//     walking() {
//         console.log("i am walking", this.#wt); //we can acces private  using this.#wt only inside class
//     }
//     running() {
//         console.log("i am running")
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }
//     // get set used to access priavte elements outside the class
// }

// // let obj = new Human();
// // console.log(obj.age);
// // obj.walking();

// //----for constructor
// let obj = new Human(50, 190, 101);
// console.log(obj.fetchWeight);

// function name1(myName = "Piyush Yadav") { //we have set name default
//     console.log("My  name is ", myName);
// }
// name1();
//In default parameterwe can put object array anything and we can use multiple defualt parameters also

// name1(null); // It will print My name is null
// name1(undefined); // it will print default value piyush yadav

function getAge() {
    return 21;
}
function utility(name = "Piyush", age = getAge()) {
    console.log(name, " ", age);
}
utility();