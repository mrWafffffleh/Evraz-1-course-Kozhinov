function add() {
    let addElement = document.getElementById('left-list');
    let input = document.getElementById('input')
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        liElement.innerText = input.value;
        liElement.classList.add('namemes')
        addElement.append(liElement);
        input.value = '';
    }
}
function add1() {
    let addElement1 = document.getElementById('right-list');
    let input1 = document.getElementById('input1')
    let liElement = document.createElement('li');

    if (input1.value === '') {
        alert('Добавь значение')
    }
    else {
        liElement.innerText = input1.value;
        liElement.classList.add('towns')
        addElement1.append(liElement);
        input1.value = '';
    }
}