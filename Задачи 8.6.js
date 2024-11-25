let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let span_red = document.getElementById("span_red")
let span_green = document.getElementById("span_green")
let span_blue = document.getElementById("span_blue")
let input = document.getElementById("input")

function add_text() {
    let text = prompt("Укажите номер блока, куда добавить текст");
    if (text == 1) {
        span_red.innerText = span_red.innerText + input.value
        input.value = ""

    }
    else if (text == 2) {
        span_green.innerText = span_green.innerText + input.value
        input.value = ""

    }
    else if (text == 3) {
        span_blue.innerText = span_blue.innerText + input.value
        input.value = ""

    }
}
function clear1() {
    span_red.innerText = ""
    span_green.innerText = ""
    span_blue.innerText = ""
}
function add_block() {
    let all_text = span_red.innerText + span_green.innerText + span_blue.innerText
    console.log(all_text)
    let last_text = document.getElementById("last_block")
    last_text.innerText = span_red.innerText + span_green.innerText + span_blue.innerText
}