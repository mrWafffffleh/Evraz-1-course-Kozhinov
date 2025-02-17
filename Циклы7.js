let a = []
function addlist() {
    let input1 = document.getElementById("input1")
    if(input1.value == " "){
        alert("")
    }
    else{
        a.push(input1.value)
        let li = document.createElement("li")
        let ol = document.getElementById("list")
        li.innerText = input1.value
        ol.append(li)
        input1.value = " "
        console.log(a)
    }
}
function chooseel() {
    let input2 = document.getElementById("input2")
    if(input2.value == ""){
        alert("Укажите индекс элемента!")
    }
    else if(input2.value > a.length - 1){
        alert("Нет элемента с таким индексом!")
        input2.value = ""
    }
    else{
        let li = document.createElement("li")
        let ul = document.getElementById("list2")
        console.log(input2.value)
        li.innerText = a[input2.value]
        ul.append(li)
        input2.value = ""
    }
}