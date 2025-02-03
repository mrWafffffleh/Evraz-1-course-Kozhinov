let i = 0
while(i!=4) {
    i = prompt("1 - красный блок, 2 - синий блок, 3 - зеленый блок, 4 - стоп игра")
    if(i == 1){
        let AddElement = document.getElementById("all")
        let divCreate = document.createElement("div")
        divCreate.classList.add("red");
        AddElement.append(divCreate);
    }
    else if(i == 2){
        let AddElement = document.getElementById("all")
        let divCreate = document.createElement("div")
            divCreate.classList.add("blue");
            AddElement.append(divCreate);
    }
    else if(i == 3) {
        let AddElement = document.getElementById("all")
        let divCreate = document.createElement("div")
        divCreate.classList.add("green");
        AddElement.append(divCreate);
    }
}
