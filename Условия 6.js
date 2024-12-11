let choose = 0
let count = 0
step = document.getElementById("step");
move = document.getElementById("move");
nums = document.getElementById("nums");
let gold = document.getElementById("gold");
let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let posgold = gold.getBoundingClientRect()
function add1(){
    count = count + 1;
    step.innerText = count;
}
function add5(){
    count = count + 5;
    step.innerText = count;
}
function add10(){
    count = count + 10;
    step.innerText = count;
}
function add50(){
    count = count + 50;
    step.innerText = count;
}
function del1(){
    count = count - 1;
    step.innerText = count;
}
function del5(){
    count = count - 5;
    step.innerText = count;
}
function del10(){
    count = count - 10;
    step.innerText = count;
}
function del50(){
    count = count - 50;
    step.innerText = count;
}
function butgold(){
    move.classList.add('gold')
    move.classList.remove('blue')
    move.classList.remove('orange')
    nums.classList.add('gold')
    nums.classList.remove('blue')
    nums.classList.remove('orange')
    gold.classList.add('border')
    choose = 1
}
function butblue(){
    move.classList.add('blue')
    move.classList.remove('orange')
    move.classList.remove('gold')
    nums.classList.add('blue')
    nums.classList.remove('orange')
    nums.classList.remove('gold')
    choose = 2
}
function butorange(){
    move.classList.add('orange')
    move.classList.remove('gold')
    move.classList.remove('blue')
    nums.classList.add('orange')
    nums.classList.remove('gold')
    nums.classList.remove('blue')
    choose = 2
}
function button_left(){
    if(choose == 0){
        alert("Выберите блок");
    }
    else if(choose == 1){
        gold.style.left = posgold.left + count + "px"
        console.log(count);
    }
}
function button_right(){
    if(choose == 0){
        alert("Выберите блок")
    }
}
function button_up(){
    if(choose == 0){
        alert("Выберите блок")
    }
}
function button_down(){
    if(choose == 0){
        alert("Выберите блок")
    }
}
function clearall(){
    move.classList.remove('gold')
    move.classList.remove('blue')
    move.classList.remove('orange')
    nums.classList.remove('gold')
    nums.classList.remove('blue')
    nums.classList.remove('orange')
    choose = 0
    step.innerText = " "
}
