function add1(){
    let div = document.getElementById("row1")
    for(let i = 0; i < 5; i++){
        div.innerText = div.innerText + " " + i
    }
}
function add2(){
    let div = document.getElementById("row2")
    for(let i = 1; i <= 5; i++){
        div.innerText = div.innerText + " " + i
    }
}
function add3(){
    let div = document.getElementById("row3")
    for(let i = 0; i < 10; i++){
        div.innerText = div.innerText + " " + i
    }
}
function add4(){
    let div = document.getElementById("row4")
    for(let i = 1; i <= 10; i++){
        div.innerText = div.innerText + " " + i
    }
}
function add5(){
    let div = document.getElementById("row5")
    for(let i = 0; i < 20; i+=2){
        div.innerText = div.innerText + " " + i
    }
}
function add6(){
    let div = document.getElementById("row6")
    for(let i = 1; i <= 20; i+=2){
        div.innerText = div.innerText + " " + i
    }
}
let row = document.getElementById('row7')
function add7() {
    for (let i = 1; i <= 20; i++) {
        let number = document.createElement('span')
        if(i % 2 == 0){
            number.classList.add('chet')
            number.innerText = i + " "
            row.append(number)
        }
        else {
            number.classList.add('nechet')
            number.innerText = i + " "
            row.append(number)
        }
    }
}