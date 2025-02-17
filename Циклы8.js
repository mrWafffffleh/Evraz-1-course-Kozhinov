a = []
let input = document.getElementById("input")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
function addin() {
    if(input.value == ""){
        alert("Укажите значение")
    }
    else{
        let ol = document.getElementById("list")
        a.push(input.value)
        let li = document.createElement("li")
        li.innerText = input.value
        ol.append(li)
        input.value = ""
    }
}
function edit(){
    if(input1.value == ""){
        alert("Укажите индекс элемента")
    }
    else if(input2.value == ""){
        alert("Укажите новое значение")
    }
    else if(input1.value > a.length){
        alert("Нет элемента с таким индексом")
    }
    else{
        let ol = document.getElementById("list")
        a[input1.value] = input2.value
        ol.innerText = ""
        console.log(a)
        for(let i = 0; i < a.length; i++){
            let li = document.createElement("li")
            li.innerText = a[i]
            ol.append(li)
        }
    }
}