function add_blue() {
    let input_blue = document.getElementById("input_blue")
    let span_blue = document.getElementById("span_blue")
    span_blue.innerText = span_blue.innerText + input_blue.value
    input_blue.value = ""
}
function add_red() {
    let input_red = document.getElementById("input_red")
    let span_red = document.getElementById("span_red")
    span_red.innerText = span_red.innerText + input_red.value
    input_red.value = ""
}
function add_green() {
    let input_green = document.getElementById("input_green")
    let span_green = document.getElementById("span_green")
    span_green.innerText = span_green.innerText + input_green.value
    input_green.value = ""
}
function clear1212() {
    let span_blue = document.getElementById("span_blue")
    let span_red = document.getElementById("span_red")
    let span_green = document.getElementById("span_green")
    span_red.innerText = ""
    span_blue.innerText = ""
    span_green.innerText = ""
}
