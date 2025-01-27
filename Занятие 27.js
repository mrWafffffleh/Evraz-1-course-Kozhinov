function addLi() {
    let addElement = document.getElementById('add');
    let input = document.getElementById('name')
    let liElement = document.createElement('li');

    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        liElement.innerText = input.value;

        if (+input.value % 2 === 0) {
            liElement.classList.add('chet')
        }
        else {
            liElement.classList.add('nechet')
        }

        addElement.append(liElement);

        input.value = '';
    }
}

