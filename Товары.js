
function addlist(show){
    let sale = document.getElementById("saleblock")
    if(show){
        sale.classList.remove("ghost")
        sale.classList.add("block")
    }
    else{
        sale.classList.add("ghost")
        sale.classList.remove("block")
    }
}
function addcart(){
    let name = document.getElementById("input-name")
    let category = document.getElementById("selection")
    let price = document.getElementById("price")
    let amount = document.getElementById("amount")
    let salenum = document.getElementById("salenum")
    let descripton = document.getElementById("desc")
    let right = document.getElementById("right")
    let cart = document.createElement("div")
    cart.classList.add("cart")
    let cart_name = document.createElement("div")
    cart_name.innerText = name.value
    cart_name.classList.add("cart-name")
    let cart_cat = document.createElement("div")
    cart_cat.innerText = category.value
    cart_cat.classList.add("cart-cat")
    let cart_desc = document.createElement("div")
    cart_desc.innerText = descripton.value
    cart_desc.classList.add("cart-desc")
    let bottom_cart = document.createElement("div")
    let pr = document.createElement("span")
    pr.innerText = "Цена: "
    let cart_price = document.createElement("span")
    cart_price.innerText = price.value + " руб. "
    let am = document.createElement("span")
    am.innerText = "Количество: "
    let cart_amount = document.createElement("span")
    cart_amount.innerText = amount.value
    let sale = document.createElement("div")
    let button = document.createElement("button")
    button.innerText = "X"
    button.classList.add("button")
    if(salenum.value != ""){
        cart_price.classList.add("cross")
        let a = salenum.value
        bottom_cart.classList.add("bottom-cart1")
        sale.innerText = parseInt(price.value) / 100 * a
        sale.classList.add("sale")
        right.append(cart)
        cart.append(button)
        cart.append(cart_name)
        cart.append(cart_cat)
        cart.append(cart_desc)
        cart.append(bottom_cart)
        bottom_cart.append(pr)
        bottom_cart.append(cart_price)
        bottom_cart.append(am)
        bottom_cart.append(cart_amount)
        cart.append(sale)
    }
    else{
        bottom_cart.classList.add("bottom-cart")
        right.append(cart)
        cart.append(button)
        cart.append(cart_name)
        cart.append(cart_cat)
        cart.append(cart_desc)
        cart.append(bottom_cart)
        bottom_cart.append(pr)
        bottom_cart.append(cart_price)
        bottom_cart.append(am)
        bottom_cart.append(cart_amount)
    }
    name.value = ""
    category.value = ""
    descripton.value = ""
    price.value = ""
    amount.value = ""
    salenum.value = ""

}