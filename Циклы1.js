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