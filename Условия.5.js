let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let divinp1 = document.getElementById("divinp1");
let divinp2 = document.getElementById("divinp2")
let divinp3 = document.getElementById("divinp3");
let res = document.getElementById("res");
function solve(){
    if(inp2.value == "+"){
        res.innerText = inp1.value + inp3.value;
    }
    if else(inp2.value == "-"){
        res.innerText = inp1.value - inp3.value;
    }
    if else(inp2.value == "*"){
        res.innerText = inp1.value * inp3.value;
    }
    if else(inp2.value == "/"){
        res.innerText = inp1.value / inp3.value;
    }
    else{
        res.innerText = "Не знаю такой операции";
    }
}