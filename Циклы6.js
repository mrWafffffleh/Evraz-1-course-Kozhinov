function add(){
    let a = ""
    let add = document.getElementById("addel")
    let input = document.getElementById("input")
    if(input.value == ""){
        alert("Нельзя создать пустой список")
    }
    add.innerText = add.innerText + "," + input.value
    input.value = ""
}