// function changeText(event) {
//     console.log(event);
//     //on clicking it will give event to addEventListener
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Hello Piyush"
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click', changeText);
//---ham hamesha function alag se likhenge taki remove aur add krte time same function aaye yaa same reference hoo agar dono ke andar function likhte toh doo object ban jaate---

// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai"
// });

// let paras = document.querySelectorAll('p');

function alertPara(event) {
    alert("You have clicked on " + event.target.textContent);
}

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }

let mydiv = document.getElementById('wrapper');

mydiv.addEventListener('click', alertPara);