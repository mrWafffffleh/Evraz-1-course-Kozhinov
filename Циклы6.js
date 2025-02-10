let a = []
let addel = document.getElementById("addel")
function add(){
    let add = document.getElementById("addel")
    let input = document.getElementById("input")
    if(input.value == ""){
        alert("Нельзя создать пустой список")
    }
    else {
        a.push(input.value)
        console.log(a)
        addel.innerText = a
        input.value = ""
    }
}
function clearlist(){
    a = []
    addel.innerText = " "
}

function numlist() {
    if(a.length == 0){
        alert("Нельзя создать, список пустой!")
    }
    else {
        let list = document.getElementById("lists")
        let ol = document.createElement("ol")
        list.append(ol)
        a.forEach((item) => {
            let liElement = document.createElement("li")
            liElement.innerText = item
            ol.append(liElement)
        })
    }
}
function nnlist() {
    if(a.length == 0){
        alert("Нельзя создать, список пустой!")
    }
    else{
        let list = document.getElementById("lists")
        let ul = document.createElement("ul")
        list.append(ul)
        a.forEach((item) => {
            let liElement = document.createElement("li")
            liElement.innerText = item
            ul.append(liElement)
        })
    }

}
