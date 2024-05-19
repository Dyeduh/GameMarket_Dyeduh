// console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = [
    {
        firstName: "Віталій",
        lastName: "Шатківський",
        subject: "Інформатика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
        firstName: "Наталія",
        lastName: "Венцель",
        subject: "Директор",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
    },
    {
        firstName: "Наталія",
        lastName: "Кучер",
        subject: "Фізика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
    },
    {
        firstName: "Олена",
        lastName: "Геча",
        subject: "Історія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
    },
    {
        firstName: "Марія",
        lastName: "Гетманська",
        subject: "Психолог",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
    },
    {
        firstName: "Василь",
        lastName: "Бабій",
        subject: "Фізкультура",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    },
    {
        firstName: "Ірина",
        lastName: "Боровська-Карандюк",
        subject: "Українська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
    },
    {
        firstName: "Вікторія",
        lastName: "Нелипович",
        subject: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
    },
    {
        firstName: "Лариса",
        lastName: "Забелло",
        subject: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    },
    {
        firstName: "Марія",
        lastName: "Медведєва",
        subject: "Географія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
    },
    {
        firstName: "Тарас",
        lastName: "Савінков",
        subject: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    },
    {
        firstName: "Анжела",
        lastName: "Лознюк",
        subject: "Українська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
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
            `
        <div class = "item">
            <h2>Вчитель №${index + 1} 3 ${itemsArray.length}</h2>
            <p>${item.firstName} ${item.lastName}</p>
            <p>Предмет: ${item.subject}</p>
            <p><img src= "${item.photo}" class="item-image"></p>
            <p><a href = "${item.url}" target="blank" class = "bonus price ">Профіль</a></p>
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