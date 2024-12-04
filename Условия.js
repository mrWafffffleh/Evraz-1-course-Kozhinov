let num = 0
total = document.getElementById("total")
body = document.getElementById("body")
text = document.getElementById("text")

function make0() {
    num = 0
    total.innerText = num
    body.style.backgroundColor = 'black'
    text.style.color = 'white'
    total.style.color = 'white'
}

function make1() {
    num = 1
    total.innerText = num
    body.style.backgroundColor = 'white'
    text.style.color = 'black'
    total.style.color = 'black'
}

function make2() {
    num = 2
    total.innerText = num
    body.style.backgroundColor = 'blue'
    text.style.color = 'white'
    total.style.color = 'white'
}

function make5() {
    num = 5
    total.innerText = num
    body.style.backgroundColor = 'green'
    text.style.color = 'white'
    total.style.color = 'white'
}

function add1() {
    num = num + 1
    total.innerText = num
    if (num == 1) {
        body.style.backgroundColor = 'white'
        text.style.color = 'black'
        total.style.color = 'black'
    } else if (num == 0) {
        body.style.backgroundColor = 'black'
        text.style.color = 'white'
        total.style.color = 'white'
    } else if (num == 2) {
        body.style.backgroundColor = 'blue'
        text.style.color = 'white'
        total.style.color = 'white'
    } else if (num == 5) {
        body.style.backgroundColor = 'green'
        text.style.color = 'white'
        total.style.color = 'white'
    } else if (num % 2 == 0) {
        body.style.backgroundColor = 'red'
        text.style.color = 'black'
        total.style.color = 'black'
    } else if (num % 2 != 0) {
        body.style.backgroundColor = 'gold'
        text.style.color = 'black'
        total.style.color = 'black'
    }
}

function del1() {
    num = num - 1
    total.innerText = num
    if (num == 1) {
        body.style.backgroundColor = 'white'
        text.style.color = 'black'
        total.style.color = 'black'
    } else if (num == 0) {
        body.style.backgroundColor = 'black'
        text.style.color = 'white'
        total.style.color = 'white'
    } else if (num == 2) {
        body.style.backgroundColor = 'blue'
        text.style.color = 'white'
        total.style.color = 'white'
    } else if (num == 5) {
        body.style.backgroundColor = 'green'
        text.style.color = 'white'
        total.style.color = 'white'
    } else if (num % 2 == 0) {
        body.style.backgroundColor = 'red'
        text.style.color = 'black'
        total.style.color = 'black'
    } else if (num % 2 != 0) {
        body.style.backgroundColor = 'goldenrod'
        text.style.color = 'black'
        total.style.color = 'black'
    }
}

