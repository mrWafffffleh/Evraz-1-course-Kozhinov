let inputName = document.getElementById("input-name")
let inputCategory = document.getElementById("selection")
let inputPrice = document.getElementById("price")
let inputAmount = document.getElementById("amount")
let inputDescripton = document.getElementById("desc")
let right = document.getElementById("right")
let listDom = document.getElementById("list")
let inputSale = document.getElementById('salenum')
let inputPickup = document.getElementById('pick-up-point')
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
    'B/U': 'Б/У',
    'fragile': 'Хрупкий'
}

function addlist(show) {
    let sale = document.getElementById("saleblock")
    if (show) {
        sale.style.setProperty('display', 'flex', 'important')
    } else {
        sale.style.setProperty('display', 'none', 'important')
    }
}

function addcart() {
    let saleCh = document.querySelector('input[name=sale]:checked')

    let cardT = document.createElement("div")
    cardT.classList.add("tovar")
    let price = ``
    if (saleCh.value == 'yes') {
        let num = +inputPrice.value * +inputSale.value / 100
        let num1 = +inputPrice.value - num
        price = ` <div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old">Цена: ${inputPrice.value} руб.</div>
                        <div>${num1} руб.</div>
                    </div>
                </div>`
    } else {
        price = `<div class="tovar-price">Цена: ${inputPrice.value}</div>`
    }
    let specials = ``
    let spec = document.querySelectorAll('input[name=features]:checked')
    for (let i = 0; i < spec.length; i++) {
        // console.log(specials[i].value, specialsObj[specials[i].value]);
        specials += ' ' + specialObj[spec[i].value];
    }
    let payment = document.querySelector("input[name=payment]:checked");
    let pay = ``;
    if (payment.value == 'cart') {
        pay = 'картой'
    } else {
        pay = 'наличными'
    }
    let card = `<div class="tovar-name">${inputName.value}</div>
            <div class="tovar-category">${categories[inputCategory.value]}</div>
            <div class="tovar-specials">${specials}</div>
            <div class="tovar-description">${inputDescripton.value}</div>
            <div class="tovar-price-count">
                ${price}
                <div class="count">Количество: ${inputAmount.value}</div>
            </div>
            <div class="tovar-description">Пункт выдачи: ${inputPickup.value}</div>
            <div class="tovar-category">Оплата ${pay}</div>
            <div class="tovar-specials">Цвет: ${colors[inputColour.value]}</div>
            <div class="tovar-close">X</div>`
    cardT.innerHTML = card
    listDom.append(cardT)
}


