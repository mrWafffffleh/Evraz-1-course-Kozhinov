let name = prompt("Введите имя")
console.log(name)

let surname = prompt("Введите фамилию")
console.log(surname)

let father = prompt("Введите отчество")
console.log(father)

let age = prompt("Введите ваш возраст")
console.log(age)

let school = prompt("Введите номер вашей школы")
console.log(school)

let class1 = prompt("Класс, в котором вы учитесь")
console.log(class1)

let sport = prompt("Введите ваш любимый вид спорта")
console.log(sport)

let subject = prompt("Введите ваш любимый школьный предмет")
console.log(subject)

let color = prompt("Введите ваш любимый цвет")
console.log(color)


let name1 = document.getElementById('name')
name1.innerText = name
let surname1 = document.getElementById('surname')
surname1.innerText = surname
let father1 = document.getElementById('father')
father1.innerText = father
let age1 = document.getElementById('age')
age1.innerText = age
let school1 = document.getElementById('school')
school1.innerText = school
let class2 = document.getElementById('class')
class2.innerText = class1
let sport1 = document.getElementById('sport')
sport1.innerText = sport
let subject1 = document.getElementById('subject')
subject1.innerText = subject
let color1 = document.getElementById('color')
color1.innerText = color

function clearDiv(){
    name1.innerText = ''
    surname1.innerText = ''
    father1.innerText = ''
    age1.innerText = ''
    school1.innerText = ''
    class2.innerText = ''
    sport1.innerText = ''
    subject1.innerText = ''
    color1.innerText = ''
}