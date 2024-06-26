// console.log('Перевірка підключеного файлу скриптів market.js')

const itemsArray = [
    {
        email: "23b_bvo@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Башинська Вікторія",
        project: "Dudi 3",
        img_author: "img/bashinska.jpg",
        img_game: "img/bashinska_game.png",
        Phaser2stGame_repo: "https://github.com/ViktoriaBashinska/Phaser2stGame",
        Phaser2stGame_demo: "https://viktoriabashinska.github.io/Phaser2stGame/",
        google_drive: "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
        google_form: "https://forms.gle/jHMQsybKdMdUHXKA7",
        GameMarket_repo: "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
        GameMarket_demo: "https://viktoriabashinska.github.io/GameMarket_Bashynska/",
        GameMarket_market: "https://viktoriabashinska.github.io/GameMarket_Bashynska/market.html",
        GameMarket_final: "https://viktoriabashinska.github.io/GameMarket_Bashynska/final/final.html"
    },
    {
        email: "23b_bdo@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Біденко Дмитро",
        project: "виживання проти зомбаря",
        img_author: "img/bidenko.jpg",
        img_game: "img/bidenko_game.png",
        Phaser2stGame_repo: "https://github.com/dimasvoinboecvolk/Phaser2ndGame",
        Phaser2stGame_demo: "https://dimasvoinboecvolk.github.io/Phaser2ndGame/",
        google_drive: "https://drive.google.com/drive/folders/18sH8j7zXJnz1Uz5bi3_uR6hss13pZhH-?usp=drive_link",
        google_form: "https://forms.gle/RDawcnD98QcHnRZw7",
        GameMarket_repo: "https://github.com/dimasvoinboecvolk/GameMarket-bidenkko",
        GameMarket_demo: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/",
        GameMarket_market: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/market.html",
        GameMarket_final: "https://dimasvoinboecvolk.github.io/GameMarket-bidenkko/final/final.html"
    },
    {
        email: "23b_bmv@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Бовсуновського Максима",
        project: "дота 2",
        img_author: "img/bovsunovsiy.jpg",
        img_game: "img/bovsunovsiy_game.png",
        Phaser2stGame_repo: "https://github.com/maksbovs/Phaser2ndGame",
        Phaser2stGame_demo: "https://maksbovs.github.io/Phaser2ndGame/",
        google_drive: "https://drive.google.com/drive/folders/1k4q30LAPEh8EpQpzamE_RYHICcYwkVG1?usp=sharing",
        google_form: "https://forms.gle/G2WLe25CYPCQjowTA",
        GameMarket_repo: "https://github.com/maksbovs/GameMarket_Bovsunoskiy",
        GameMarket_demo: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/",
        GameMarket_market: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/market.html",
        GameMarket_final: "https://maksbovs.github.io/GameMarket_Bovsunoskiy/final/final.html"
    },
    {
        email: "23b_vvi@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Волинець Владислав",
        project: "Пес Патрон на завданні",
        img_author: "img/volinec.jpg",
        img_game: "img/volinec_game.png",
        Phaser2stGame_repo: "https://github.com/volynets-vlad/Phaser2ndGame?authuser=0",
        Phaser2stGame_demo: "https://volynets-vlad.github.io/Phaser2ndGame/?authuser=0",
        google_drive: "https://drive.google.com/drive/folders/1g2bPWq8NGqzlBAlI8rMiOYNWBIuiCMRy?usp=classroom_web&authuser=0",
        google_form: "https://forms.gle/5DGf6yDiZLAVGu7o9?authuser=0",
        GameMarket_repo: "https://github.com/volynets-vlad/GameMarket_Volynets",
        GameMarket_demo: "https://volynets-vlad.github.io/GameMarket_Volynets/",
        GameMarket_market: "https://volynets-vlad.github.io/GameMarket_Volynets/market.html",
        GameMarket_final: "https://volynets-vlad.github.io/GameMarket_Volynets/final/final.html"
    },
    {
        email: "23b_gas@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Галетко Артем",
        project: "",
        img_author: "img/galetko.jpg",
        img_game: "img/galetko_game.png",
        Phaser2stGame_repo: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        Phaser2stGame_demo: "https://artem4ikgaletko.github.io/phaserSec2ndgame/?authuser=0",
        google_drive: "https://drive.google.com/drive/folders/1HSnDCZfuIwp7RzFXJjG2IBUhC4Gx9eyL?usp=drive_link",
        google_form: "https://forms.gle/cz6ZfWN7UFPUgwFC7?authuser=0",
        GameMarket_repo: "https://github.com/Artem4ikGAletko/GameMarket_Haletko",
        GameMarket_demo: "https://artem4ikgaletko.github.io/GameMarket_Haletko/"
    },
    {
        email: "23b_gbs@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Гордійчук Богдан",
        project: "Zhytomur squad Snyok",
        img_author: "img/gordiychuk.jpg",
        img_game: "img/gordiychuk_game.png",
        Phaser2stGame_repo: "https://github.com/malintovi/Phaser2ndGame?authuser=0",
        Phaser2stGame_demo: "https://malintovi.github.io/Phaser2ndGame/?authuser=0",
        google_drive: "https://drive.google.com/drive/folders/1EYhBdclLisemO0-yRcLov0Qu3VMlvaVl?usp=sharing",
        google_form: "https://forms.gle/VaDXCem7gVuEvumQ9",
        GameMarket_repo: "https://github.com/malintovi/GameMarket_Hordiichuk",
        GameMarket_demo: "https://malintovi.github.io/GameMarket_Hordiichuk/",
        GameMarket_market: "https://malintovi.github.io/GameMarket_Hordiichuk/market.html",
        GameMarket_final: "https://malintovi.github.io/GameMarket_Hordiichuk/final/final.html?authuser=0"
    },
    {
        email: "23b_gai@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Гоцман Артем",
        project: "Run_Dude",
        img_author: "img/gocman.jpg",
        img_game: "img/gocman_game.png",
        Phaser2stGame_repo: "https://github.com/GOLDEN-ZTU/Phaser2ndGame",
        Phaser2stGame_demo: "https://golden-ztu.github.io/Phaser2ndGame/",
        google_drive: "https://drive.google.com/drive/folders/17jcUqrZBQaD6g0UtpsljRbQN-EcUqnT2",
        google_form: "https://forms.gle/NTmMk1yqBNhaoXzj9",
        GameMarket_repo: "https://github.com/GOLDEN-ZTU/GameMarket_Hotsman.git",
        GameMarket_demo: "https://golden-ztu.github.io/GameMarket_Hotsman/",
        GameMarket_market: "https://golden-ztu.github.io/GameMarket_Hotsman/market.html",
        GameMarket_final: "https://golden-ztu.github.io/GameMarket_Hotsman/final/final.html"
    },
    {
        email: "23b_god@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Гуменюк Олег",
        project: "",
        img_author: "img/gumenuk.jpg",
        img_game: "img/gumenuk_game.png",
        Phaser2stGame_repo: "https://github.com/OlegGumenuk",
        Phaser2stGame_demo: "https://oleggumenuk.github.io/Phaser2ndGame/",
        google_drive: "https://drive.google.com/drive/folders/10tRQ_WUvgqz0yGnm0J7WduMyziVFyoE5?usp=drive_link",
        google_form: "https://forms.gle/iXKinscde4Cbqe6e7",
        GameMarket_repo: "https://github.com/OlegGumenuk/GameMarket_Gumenuk",
        GameMarket_demo: "https://oleggumenuk.github.io/GameMarket_Gumenuk/"
    },
    {
        email: "23b_dis@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Дєдух Ілля",
        project: "kozak_battleground",
        img_author: "img/dyeduh.jpg",
        img_game: "img/dyeduh_game.png",
        Phaser2stGame_repo: "https://github.com/Dyeduh/Phaser2ndGame",
        Phaser2stGame_demo: "https://dyeduh.github.io/Phaser2ndGame/",
        google_drive: "https://drive.google.com/drive/folders/1ms2y6ckh0DM3u-Li5iWtKVMketXVKQEy?usp=classroom_web&authuser=5",
        google_form: "https://docs.google.com/forms/d/e/1FAIpQLSe7zr5KaMa5DfxzbKWN0Iz5FJs6ZoEX-4Vz5MB9erOUlKl0yQ/viewform?usp=sf_link&authuser=5",
        GameMarket_repo: "https://github.com/Dyeduh/GameMarket_Dyeduh",
        GameMarket_demo: "https://dyeduh.github.io/GameMarket_Dyeduh/",
        GameMarket_market: "https://dyeduh.github.io/GameMarket_Dyeduh/market.html?authuser=0",
        GameMarket_final: "https://dyeduh.github.io/GameMarket_Dyeduh/final/final.html?authuser=0"
    },
    {
        email: "23b_dao@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Дідківській Андрій",
        project: "Баобаб",
        img_author: "img/didkivskiy.jpg",
        img_game: "img/didkivskiy_game.png",
        Phaser2ndGame_repo: "https://github.com/AndriyDidkivskij/Phaser2ndGame",
        Phaser2ndGame_demo: "https://andriydidkivskij.github.io/Phaser2ndGame/",
        google_drive: "https://drive.google.com/drive/folders/1Q65jiZ9y4uJw_kcvvC3ma3fksBzR4Btp",
        google_form: "https://forms.gle/WNDGSsahKLzHH7LW7",
        GameMarket_repo: "https://github.com/AndriyDidkivskij/GameMarket_Didkivskij",
        GameMarket_demo: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/",
        GameMarket_market: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/market.html?authuser=0",
        GameMarket_final: "https://andriydidkivskij.github.io/GameMarket_Didkivskij/final/final.html"
    },
    {
        email: "23b_zbv@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Заєць Богдан",
        project: "",
        img_author: "img/zayec.jpg",
        img_game: "img/zayec_game.png",
        Phaser1stGame_repo: "https://github.com/niccer5/Phaser1stGame",
        Phaser1stGame_demo: "https://niccer5.github.io/Phaser1stGame/",
        google_drive: "https://drive.google.com/drive/folders/1NnmW02vDttgyJSTsOeB-hK3L-NuQjKr8",
        google_form: "https://forms.gle/EcWrBsp6jhMA78Kd9",
        GameMarket_repo: "https://github.com/niccer5/-GameMarket_Zayets",
        GameMarket_demo: "https://niccer5.github.io/-GameMarket_Zayets/"
    },
    {
        email: "23b_kav@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Кравчук Андрій",
        project: "",
        img_author: "img/kravchuk.jpg",
        img_game: "img/kravchuk_game.png",
        Phaser2ndGame_repo: "https://github.com/yawty1",
        Phaser2ndGame_demo: "https://yawty1.github.io/Phaser2ndGame1/",
        google_drive: "https://drive.google.com/drive/folders/1iTB53E5SwT1ds8PftFEwIUbkm5rPm6Ea?usp=drive_link",
        google_form: "https://forms.gle/1n5FQ3NmUX6fWiiB6",
        GameMarket_repo: "https://github.com/yawty1/GameMarket_Kravchuk",
        GameMarket_demo: "https://yawty1.github.io/GameMarket_Kravchuk/"
    },
    {
        email: "23b_kmv@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Кучер Максим",
        project: "Jfr",
        img_author: "img/kucher.jpg",
        img_game: "img/kucher_game.png",
        Phaser2ndGame_repo: "https://github.com/KucherMaks/Phaser2ndGame?authuser=4&hl=ru",
        Phaser2ndGame_demo: "https://kuchermaks.github.io/Phaser2ndGame/?authuser=4&hl=ru",
        google_drive: "https://drive.google.com/drive/folders/1OGZCkFefm150MhQfef1UEbgJImuC4diT?usp=sharing",
        google_form: "https://forms.gle/yaJ2EMs6hNbRpTTg9",
        GameMarket_repo: "https://github.com/KucherMaks/GameMarket_Kucher",
        GameMarket_demo: "https://kuchermaks.github.io/GameMarket_Kucher/",
        GameMarket_market: "https://kuchermaks.github.io/GameMarket_Kucher/market.html",
        GameMarket_final: "https://kuchermaks.github.io/GameMarket_Kucher/final/final.html"
    },
    {
        email: "23b_lkm@liceum.ztu.edu.ua",
        class: "10-Б 1",
        name: "Лавренко Каріна",
        project: "Dudi 2",
        img_author: "img/lavrenko.jpg",
        img_game: "img/lavrenko_game.png",
        Phaser2stGame_repo: "https://github.com/KarinaLavrenko/Phaser2stGame?authuser=0",
        Phaser2stGame_demo: "https://karinalavrenko.github.io/Phaser2stGame/?authuser=0",
        google_drive: "https://drive.google.com/drive/folders/1T8N8q-PBfSBOrRVSNBdqb4bULfN1ZaE9?usp=classroom_web&authuser=0",
        google_form: "https://forms.gle/XbBbwwGJ8kJ5tTya8?authuser=0",
        GameMarket_repo: "https://github.com/KarinaLavrenko/GameMarket_Lavrenko?authuser=0",
        GameMarket_demo: "https://karinalavrenko.github.io/GameMarket_Lavrenko/",
        GameMarket_market: "https://karinalavrenko.github.io/GameMarket_Lavrenko/market.html?authuser=0",
        GameMarket_final: "https://karinalavrenko.github.io/GameMarket_Lavrenko/final/final.html?authuser=0"
    },
];

const itemsDiv = document.getElementById('items');

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

    itemsArray.forEach((item) => {
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
            // `
            // <div class = "item">
            //     <div class="item-title">${item.title}</div>
            //     <div><img src= ${item.image} class="item-image"></div>

            //     <div class="parts-pay">
            //         <div><img src="img/paw.png" alt="">${item.mono}</div>
            //         <div><img src="img/pb.png" alt="">${item.pb}</div>
            //     </div>

            //     <div class="prise">
            //         <div><span>${item.prise_standart}</span><sup>грн</sup></div>
            //         <div><span>${item.prise_discount}</span><sup>грн</sup></div>
            //     </div>

            //     <div class="price bonus">
            //         <div>Ціна за купоном</div>
            //         <div><span>${item.prise_coupon}</span><sup>грн</sup></div>
            //     </div>
            // </div>
            // `
        `
        <div class="project-item">
            <div class="header">
                <h2>${item.project}</h2>
                <p>${item.name} ${item.class} ${item.email}</p>
            </div>
            <div class="images">
                <img src="${item.img_game}" class="game-image" alt="Game Image">
                <img src="${item.img_author}" class="author-image" alt="Author Image">
            </div>
            <div class="links">
                <a href="${item.Phaser2stGame_repo}" target="_blank">GitHub Repository</a>
                <a href="${item.Phaser2stGame_demo}" target="_blank">GitHub Pages Game</a>
                <a href="${item.google_drive}" target="_blank">Google Drive Documentation</a>
                <a href="${item.google_form}" target="_blank">Survey Form</a>
                <a href="${item.GameMarket_repo}" target="_blank">GitHub Repository GameMarket</a>
                <a href="${item.GameMarket_demo}" target="_blank">GitHub Pages Design</a>
                <a href="${item.GameMarket_market}" target="_blank">Market Pages 4 Products</a>
                <a href="${item.GameMarket_final}" target="_blank">Market Pages Final</a>
            </div>
        </div>
        `;
    });
} else {
    console.log('Блок проектів не знайдено');
}

// itemsArray.sort().forEach((item, index) =>{
//     console.log(index + '-й елемент',item)
// })

// itemsArray = itemsArray.sort()

// for (let i = 0; i < itemsArray.length; i++) {
//     console.log(i + '-й елемент: ', itemsArray[i])
// }