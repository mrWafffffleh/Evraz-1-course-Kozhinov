
// function addlist(){
//     let rad = document.querySelector("input[name=sale]:checked")
//     let sale = document.getElementById("saleblock")
//
//     if(rad.value == "yes"){
//         sale.classList.remove("ghost")
//         sale.classList.add("block")
//     }
// }

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
    let description = document.getElementById("desc")
}