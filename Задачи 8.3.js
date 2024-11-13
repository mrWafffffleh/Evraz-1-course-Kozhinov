function change() {
    let new_text = prompt("Введите новый текст")
    console.log(new_text)
    let div = document.getElementById('div')
    div.innerText = new_text
}