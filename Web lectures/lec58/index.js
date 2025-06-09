// let name = "Yadav Jii";
function outerFun() {
    let name = "Piyush Yadav";
    function innerFun() { 
        // let name = "piyush";
        console.log(name);
    }
    return innerFun();
}
let inner = outerFun();
inner();