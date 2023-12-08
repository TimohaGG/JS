let num = document.getElementById("number");
let button = document.getElementById("button");
console.log(button);

function generateNumber(){
    num.innerText = Math.floor(Math.random() * (100-1) + 1);
}

