console.log('Перевірка підключеного файлу скриптів market.js')

let itemsDiv = document.getElementById("items");

// if (itemsDiv) {
//     console.log(itemsDiv)

//     console.log('Поле classList:', itemsDiv.classList)
//     console.log('Поле id: ', itemsDiv.id)
//     console.log('Поле clientWidth: ', itemsDiv.clientWidth)
//     console.log('Поле InnerHTML: ', itemsDiv.innerHTML)

//     itemsDiv.innerText = "Перший Програмно доданий текст";
//     itemsDiv.innerText += "Другий Програмно доданий текст";

//     itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>';
// } else {
//     console.log("Блок товарів не знайдено")
// }

if (itemsDiv) {
    // console.log(itemsDiv)

    // itemsDiv.innerHTML += '<div class= "item"></div>'
    // itemsDiv.innerHTML += '<div class= "item"></div>'
    // itemsDiv.innerHTML += '<div class= "item"></div>'
    // itemsDiv.innerHTML += '<div class= "item"></div>'

    // for (let i=0; i < 100; i++) {
    //     itemsDiv.innerHTML += '<div class = "item"></div>'
    // }
} else {
    console.log('Блок товарів не знайдено')
}

let itemsArray = [
    "Газонокосарка 43", 
    "Електричний гример 110", 
    "Електричния газонокосарка 32", 
    "Акумулаторний оприскувач 12 N",
    "Газонокосарка 430",
    "Електричний тример 130",
    "Електрична газонокосарка 320",
    "Акумуляторний оприскувач 12 E",
]

console.log(itemsArray)

for (let i = 0; i < itemsArray.length; i++) {
    console.log(itemsArray[i])
}