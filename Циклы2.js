function add() {
    let addElement = document.getElementById('left-list');
    let input = document.getElementById('input')
    let liElement = document.createElement('li');
    let input_number = document.getElementById('input-number');
    let number = input_number.value;
    if (input.value === '') {
        alert('Добавь значение')
    }
    else {
        for(let i = 0; i < number; i++){
            let liElement = document.createElement('li');
            liElement.innerText = input.value;
            liElement.classList.add('namemes')
            addElement.append(liElement);
        }
        input.value = '';
        input_number.value = '';
    }
}
function add1() {
    let addElement1 = document.getElementById('right-list');
    let input1 = document.getElementById('input1')
    let input_number = document.getElementById('input-number1');
    let number = input_number.value;

    if (input1.value === '') {
        alert('Добавь значение')
    }
    else {
        for (let i = 0; i < number; i++) {
            let liElement = document.createElement('li');
            liElement.innerText = input1.value;
            liElement.classList.add('towns')
            addElement1.append(liElement);
            console.log(number)
        }
        input1.value = '';
        input_number.value = '';
    }
}