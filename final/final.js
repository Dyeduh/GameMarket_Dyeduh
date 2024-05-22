// console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = [
    {
        title: "Мотокоса 43",
        image: "img/moto.jpg",
        mono: 6,
        pb: 8,
        prise_standart: 5499,
        prise_discount: 4497,
        prise_coupon: 4395,
    },
    {
        title: "Електричний тример 110",
        image: "img/trim.jpg",
        mono: 5,
        pb: 6,
        prise_standart: 4497,
        prise_discount: 3498,
        prise_coupon: 3396,
    },
    {
        title: "Електрична газонокосарка 32",
        image: "img/ele.png",
        mono: 4,
        pb: 5,
        prise_standart: 4497,
        prise_discount: 3297,
        prise_coupon: 3195,
    },
    {
        title: "Акумуляторний обприскувач 12 N",
        image: "img/obp.jpg",
        mono: 2,
        pb: 3,
        prise_standart: 2190,
        prise_discount: 1698,
        prise_coupon: 1596,
    },
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

    itemsArray.forEach((item, index) => {
        // console.log(item)
        itemsDiv.innerHTML +=
            // `
            // <div class = "item">
            //     <h2>Товар №${index+1} з ${itemsArray.length}</h2>
            //     <p>${item}</p>
            // </div>
            // `
        //     `
        // <div class = "item">
        //     <h2>Вчитель №${index + 1} 3 ${itemsArray.length}</h2>
        //     <p>${item.firstName} ${item.lastName}</p>
        //     <p>Предмет: ${item.subject}</p>
        //     <p><img src= "${item.photo}" class="item-image"></p>
        //     <p><a href = "${item.url}" target="blank" class = "bonus price ">Профіль</a></p>
        // </div>
        // `
        `
        <div class = "item">
            <div class="item-title">${item.title}</div>
            <div><img src= ${item.image} class="item-image"></div>

            <div class="parts-pay">
                <div><img src="img/paw.png" alt="">${item.mono}</div>
                <div><img src="img/pb.png" alt="">${item.pb}</div>
            </div>
            
            <div class="prise">
                <div><span>${item.prise_standart}</span><sup>грн</sup></div>
                <div><span>${item.prise_discount}</span><sup>грн</sup></div>
            </div>

            <div class="price bonus">
                <div>Ціна за купоном</div>
                <div><span>${item.prise_coupon}</span><sup>грн</sup></div>
            </div>
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