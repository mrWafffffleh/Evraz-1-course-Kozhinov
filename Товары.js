let inputName = document.getElementById("input-name")
let inputCategory = document.getElementById("selection")
let inputPrice = document.getElementById("price")
let inputAmount = document.getElementById("amount")
let inputDescripton = document.getElementById("desc")
let right = document.getElementById("right")
let listDom = document.getElementById("list")
let inputSale = document.getElementById('salenum')

let categories = {
    'Products': 'Продукты',
    'Technic': 'Техника',
    'Jewellery': 'Украшения',
    'House': 'Товары для дома',
    'Clothes': 'Одежда'
}
let specialObj = {
    'B/U': 'Б/У',
    'fragile': 'Хрупкий'
}
function addlist(show){
    let sale = document.getElementById("saleblock")
    if(show){
        sale.style.setProperty('display', 'flex', 'important')
    }
    else{
        sale.style.setProperty('display', 'none', 'important')
    }
}
function addcart(){
    let saleCh = document.querySelector('input[name=sale]:checked')

    let cardT = document.createElement("div")
    cardT.classList.add("tovar")
    let price =``
    if(saleCh == 'yes'){
        let num = +inputPrice * +inputSale/100
        let num1 = +inputPrice - num
        price =` <div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old">Цена: ${inputPrice.value} руб.</div>
                        <div>${num1} руб.</div>
                    </div>
                </div>`
    }
    else{
        price = `<div class="tovar-price">Цена: ${inputPrice.value}</div>`
    }
    let specials = ``
    let spec = document.querySelectorAll('input[name=features]:checked')
    for (let i = 0; i < spec.length; i++) {
        // console.log(specials[i].value, specialsObj[specials[i].value]);
        specials += ' ' + specialObj[spec[i].value];
    }
    let card = `<div class="tovar-name">${ inputName.value }</div>
            <div class="tovar-category">${categories[inputCategory.value]}</div>
            <div class="tovar-specials">${specials}</div>
            <div class="tovar-description">${inputDescripton.value}</div>
            <div class="tovar-price-count">
                ${price}
                <div class="count">${inputAmount.value}</div>
            </div>
            <div class="tovar-close">X</div>`
    cardT.innerHTML = card
    listDom.append(cardT)


}


