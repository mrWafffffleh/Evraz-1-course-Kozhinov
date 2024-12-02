let num = 0
total = document.getElementById("total")
body = document.getElementById("body")
text = document.getElementById("text")
function make0(){
    num = 0
    total.innerText = num
    body.style.backgroundColor = 'black'
    text.style.color  = 'white'
    total.style.color = 'white'
}
function make1(){
    num = 1
    total.innerText = num
}
function make2(){
    num = 2
    total.innerText = num
}
function make5(){
    num = 5
    total.innerText = num
}
function add1(){
    num = num + 1
    total.innerText = num
}
function del1(){
    num = num - 1
    total.innerText = num
}

