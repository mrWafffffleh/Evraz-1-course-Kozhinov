let choose = 0
let count = 0
step = document.getElementById("step");
move = document.getElementById("move");
nums = document.getElementById("nums");
let gold = document.getElementById("gold");
let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let posgold = gold.getBoundingClientRect()
let posblue = blue.getBoundingClientRect()
let posorange = orange.getBoundingClientRect()
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
    gold.classList.add("border")
    blue.classList.remove("border")
    orange.classList.remove("border")
}
function butblue(){
    move.classList.add('blue')
    move.classList.remove('orange')
    move.classList.remove('gold')
    nums.classList.add('blue')
    nums.classList.remove('orange')
    nums.classList.remove('gold')
    choose = 2
    gold.classList.remove("border")
    blue.classList.add("border")
    orange.classList.remove("border")
}
function butorange(){
    move.classList.add('orange')
    move.classList.remove('gold')
    move.classList.remove('blue')
    nums.classList.add('orange')
    nums.classList.remove('gold')
    nums.classList.remove('blue')
    choose = 3
    gold.classList.remove("border")
    blue.classList.remove("border")
    orange.classList.add("border")
}
function button_left(){
    if(choose == 0){
        alert("Выберите блок");
    }
    else if(choose == 1){
        let posgold = gold.getBoundingClientRect()
        gold.style.left = posgold.left - count + "px"
        if(posgold.left == 0){
            gold.style.left = 0px

        }
    }
    else if(choose == 2){
        let posblue = blue.getBoundingClientRect()
        blue.style.left = posblue.left - count + "px"

    }
    else if(choose == 3){
        let posorange = orange.getBoundingClientRect()
        orange.style.left = posorange.left - count + "px"

    }
}
function button_right(){
    if(choose == 0){
        alert("Выберите блок")
    }
    else if(choose == 1){
        let posgold = gold.getBoundingClientRect()
        gold.style.left = posgold.left + count + "px"

    }
    else if(choose == 2){
        let posblue = blue.getBoundingClientRect()
        blue.style.left = posblue.left + count + "px"

    }
    else if(choose == 3){
        let posorange = orange.getBoundingClientRect()
        orange.style.left = posorange.left + count + "px"

    }
}
function button_up(){
    if(choose == 0){
        alert("Выберите блок")
    }
    else if(choose == 1){
        let posgold = gold.getBoundingClientRect()
        gold.style.top = posgold.top - count + "px"

    }
    else if(choose == 2){
        let posblue = blue.getBoundingClientRect()
        blue.style.top = posblue.top - count + "px"

    }
    else if(choose == 3){
        let posorange = orange.getBoundingClientRect()
        orange.style.top = posorange.top - count + "px"

    }
}
function button_down(){
    if(choose == 0){
        alert("Выберите блок")
    }
    else if(choose == 1){
        let posgold = gold.getBoundingClientRect()
        gold.style.top = posgold.top + count + "px"

    }
    else if(choose == 2){
        let posblue = blue.getBoundingClientRect()
        blue.style.top = posblue.top + count + "px"

    }
    else if(choose == 3){
        let posorange = orange.getBoundingClientRect()
        orange.style.top = posorange.top + count + "px"

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
    count = 0
}
