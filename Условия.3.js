let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let res = document.getElementById("res");
let divinp1 = document.getElementById("divinp1");
let divinp2 = document.getElementById("divinp2");
function checkNumber(){
    if(+inp1.value > +inp2.value){
        res.innerText = 'Первое число больше, чем второе'
        divinp1.classList.add('higher')
        divinp2.classList.remove('higher')
    }
    else if(+inp1.value < +inp2.value){
        res.innerText = 'Второе число больше, чем второе'
        divinp2.classList.add('higher')
        divinp1.classList.remove('higher')
    }
    else if(+inp1.value == +inp2.value){
        res.innerText = 'Числа равны друг другу, большего не найдено'
        divinp1.classList.remove('higher')
        divinp2.classList.remove('higher')
    }
}
