// console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = [
    "Газонокосарка 43", 
    "Електричний гример 110", 
    "Електричния газонокосарка 32", 
    "Акумулаторний оприскувач 12 N",
    "Газонокосарка 44", 
    "Електричний гример 111", 
    "Електричния газонокосарка 33", 
    "Акумулаторний оприскувач 13 N",
    "Газонокосарка 45", 
    "Електричний гример 112", 
    "Електричния газонокосарка 34", 
    "Акумулаторний оприскувач 14 N",
    "Газонокосарка 43", 
    "Електричний гример 110", 
    "Електричния газонокосарка 32", 
    "Акумулаторний оприскувач 12 N",
    "Газонокосарка 44", 
    "Електричний гример 111", 
    "Електричния газонокосарка 33", 
    "Акумулаторний оприскувач 13 N",
    "Газонокосарка 45", 
    "Електричний гример 112", 
    "Електричния газонокосарка 34", 
    "Акумулаторний оприскувач 14 N",
]

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

    itemsArray.forEach((item, index) =>{
        // console.log(item)
        itemsDiv.innerHTML +=
        `
        <div class = "item">
            <h2>Товар №${index+1} з ${itemsArray.length}</h2>
            <p>${item}</p>
        </div>
        `
    })
} else { 
    console.log('Блок товарів не знайдено')
}

// itemsArray.sort().forEach((item, index) =>{
//     console.log(index + '-й елемент',item)
// })

// itemsArray = itemsArray.sort()

// for (let i = 0; i < itemsArray.length; i++) {
//     console.log(i + '-й елемент: ', itemsArray[i])
// }