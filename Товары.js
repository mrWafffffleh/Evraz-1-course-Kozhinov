let inputName = document.getElementById("input-name")
let inputCategory = document.getElementById("selection")
let inputPrice = document.getElementById("price")
let inputAmount = document.getElementById("amount")
let inputDescripton = document.getElementById("desc")
let right = document.getElementById("right")
let listDom = document.getElementById("list")
let inputSale = document.getElementById('salenum')
let inputPickup = document.getElementById('pick-up-point')
let buttonAdd = document.getElementById('button-add')
let buttonEdit = document.getElementById('button-edit')
let form = document.getElementById('form')
let titleAdd = document.getElementById('titleAdd')
let titleEdit = document.getElementById('titleEdit')
let inputColour = document.getElementById('select-colour')
let categories = {
    'Products': 'Продукты',
    'Technic': 'Техника',
    'Jewellery': 'Украшения',
    'House': 'Товары для дома',
    'Clothes': 'Одежда'
}
let colors = {
    'blue': 'Синий',
    'red': 'Красный',
    'green': 'Зеленый',
    'yellow': 'Желтый',
    'orange': 'Оранжевый',
    'purple': 'Фиолетовый',
    'pink': 'Розовый',
    'black': 'Черный',
    'white': 'Белый'
}
let specialObj = {
    'BU': 'Б/У',
    'fragile': 'Хрупкий'
}
let products = []
let curEdProd = null

function addlist(show) {
    let sale = document.getElementById("saleblock")
    if (show) {
        sale.style.setProperty('display', 'flex', 'important')
    }
    else {
        sale.style.setProperty('display', 'none', 'important')
    }
}
function addTovar(){
    let saleCh = document.querySelector('input[name=sale]:checked')
    let spVal = []
    let specs = document.querySelectorAll('input[name=features]:checked')
    for (let i = 0; i < specs.length; i++) {
        spVal.push(specs[i].value)
    }
    let payment = document.querySelector("input[name=payment]:checked");
    let pay = ``;
    if (payment.value == 'cart') {
        pay = 'картой'
    } else {
        pay = 'наличными'
    }
    let product = {
        name: inputName.value,
        category: inputCategory.value,
        specials: spVal,
        description: inputDescripton.value,
        price: inputPrice.value,
        amount: inputAmount.value,
        saleCh: saleCh.value,
        sale: inputSale.value,
        pickup: inputPickup.value,
        colour: inputColour.value,
        pay: pay

    }
    let prodInd = products.push(product) - 1
    addcart(product, prodInd)
}
function addcart(product, prodInd) {
    let cardT = document.createElement("div")
    cardT.classList.add("tovar")
    let price = ``
    if (product.saleCh == 'true') {
        let num = +product.price * +product.sale / 100
        let num1 = +product.price - num
        price = ` <div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old">Цена: ${product.price} руб.</div>
                        <div>${num1} руб.</div>
                    </div>
                </div>`
    }
    else {
        price = `<div class="tovar-price">Цена: ${product.price}</div>`
    }
    let specials = ``
    for(let i = 0; i < product.specials.length; i++){
        specials += ' ' + specialObj[product.specials[i]];
    }



    let card = `<div class="tovar-name">${product.name}</div>
            <div class="tovar-category">${categories[product.category]}</div>
            <div class="tovar-specials">${specials}</div>
            <div class="tovar-description">${product.description}</div>
            <div class="tovar-price-count">
                ${price}
                <div class="count">Количество: ${product.amount}</div>
            </div>
            <div class="tovar-description">Пункт выдачи: ${product.pickup}</div>
            <div class="tovar-category">Оплата ${product.pay}</div>
            <div class="tovar-specials">Цвет: ${colors[product.colour]}</div>
            <div class="tovar-close" onclick="clearCart(${prodInd})">X</div>
            <div class="tovar-edit">
                <button onclick="edit(${prodInd})">Редактировать</button>
            </div>`
    let sale = document.getElementById("saleblock")
    sale.style.setProperty('display', 'none', 'important')
    cardT.innerHTML = card
    listDom.append(cardT)
    event.preventDefault()
    form.reset()
}
function edit(prodInd){
    curEdProd = prodInd
    buttonAdd.classList.add('hide')
    buttonEdit.classList.remove('hide')
    titleEdit.classList.remove('hide')
    titleAdd.classList.add('hide')

    let product = products[prodInd]
    inputName.value = product.name
    inputPrice.value = product.price
    inputAmount.value = product.amount
    inputDescripton.value = product.description
    inputCategory.value = product.category
    inputColour.value = product.colour
    inputPickup.value = product.pickup
    payment = product.pay

    let radio = document.querySelector(`input[name=sale][value=${product.saleCh}]`)
    let sale = document.getElementById("saleblock")
    if(radio){
        radio.checked = true
        sale.style.setProperty('display', 'flex', 'important')
        sale.value = product.sale
    }
    for(let i = 0; i < product.specials.length; i++){
        let spVal = product.specials[i]
        let checkbox = document.querySelector(`input[name=features][value=${spVal}]`)
        if(checkbox){
            checkbox.checked = true
        }
    }

}
function editTovar(){
    event.preventDefault()
    buttonAdd.classList.remove('hide')
    buttonEdit.classList.add('hide')
    titleEdit.classList.add('hide')
    titleAdd.classList.remove('hide')
    let product = products[curEdProd]
    curEdProd = null
    let saleCh = document.querySelector(`input[name=sale]:checked`)
    let spVal = []
    let specials = document.querySelectorAll(`input[name=features]:checked`)
    for(let i = 0; i < specials.length; i++){
        spVal.push(specials[i].value);
    }
    let payment = document.querySelector(`input[name=payment]:checked`)
    let pay = ``
    if (payment.value == 'cart') {
        pay = 'картой'
    } else {
        pay = 'наличными'
    }
    product.name = inputName.value
    product.category = inputCategory.value
    product.specials = spVal;
    product.description = inputDescripton.value;
    product.saleCh = saleCh.value;
    product.sale = inputSale.value;
    product.price = inputPrice.value;
    product.amount = inputAmount.value;
    product.pay = pay
    product.colour = inputColour.value
    product.pickup = inputPickup.value
    event.preventDefault();
    form.reset();
    buildAg();
}
function buildAg(){
    listDom.innerText = ''
    for(let i = 0; i < products.length; i++){
        let product = products[i]
        addcart(product, i)
    }
}
function clearCart(prodInd){
    curProd = prodInd
    products.splice(prodInd, 1)
    buildAg()
}


