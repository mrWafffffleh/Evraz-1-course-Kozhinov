let input = document.getElementById("input");
let num = document.getElementById("num");
function check(){
    if(+input.value%2 == 0){
        num.innerText = 'Введеное число четное'
    }
    else{
        num.innerText = 'Введеное число нечетное'
    }
}