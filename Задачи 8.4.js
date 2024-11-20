
let span11 = document.getElementById("11")
let span22 = document.getElementById("22")
let span33 = document.getElementById("33")
function add1() {
    let input1 = document.getElementById("input1")
    let span11 = document.getElementById("11")
    span11.innerText = span11.innerText + input1.value
    input1.value = ""
}
function add2() {
    let input2 = document.getElementById("input2")
    let span22 = document.getElementById("22")
    span22.innerText = span22.innerText + input2.value
    input2.value = ""
}
function add3() {
    let input3 = document.getElementById("input3")
    let span33 = document.getElementById("33")
    span33.innerText = span33.innerText + input3.value
    input3.value = ""
}
function clear2(){
    span11.innerText = ''
    span22.innerText = ''
    span33.innerText = ''
}