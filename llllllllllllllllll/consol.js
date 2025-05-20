
// // function output_script(number) {
// //     console.clear();

// //     let result =""


// // }


























// // let number = [
// //     [0, 0, 0],
// //     [0, 0, 0],
// //     [0, 0, 0],
// // ]

// // let userImput = prompt("enter your move (0, 1, 2)")

// // let userImputArray = userImput.split(",")

// // userImputArray[0] = Number(userImputArray[0])
// // userImputArray[1] = Number(userImputArray[1])

// // number[userImputArray[0]][userImputArray[1]] = 1

// // console.log(number);
// function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }

// function checkCol(matrix, col_number, num_to_check) {

//     if (matrix[0][col_number] == num_to_check &&
//         matrix[1][col_number] == num_to_check &&
//         matrix[2][col_number] == num_to_check) {
//         return true;
//     }
//     return false;
// }
// function checkRow(matrix, row_number, num_to_check) {

//     if (matrix[row_number][0] == num_to_check &&
//         matrix[row_number][1] == num_to_check &&
//         matrix[row_number][2] == num_to_check) {
//         return true;
//     }
//     return false;
// }
// function checkDiag1(matrix, num_to_check) {

//     if (matrix[0][0] == num_to_check &&
//         matrix[1][1] == num_to_check &&
//         matrix[2][2] == num_to_check) {
//         return true;
//     }
//     return false;
// }
// function checkDiag2(matrix, num_to_check) {

//     if (matrix[0][2] == num_to_check &&
//         matrix[1][1] == num_to_check &&
//         matrix[2][0] == num_to_check) {
//         return true;
//     }
//     return false;
// }

// function checkDrow(matrix) {
//     let drow = true
//     for (let x = 0; x < matrix.length; x++) {
//         // Ітерація по елементах в кожному рядку
//         for (let y = 0; y < matrix[x].length; y++) {
//             // Отримання елемента з позиції (x, y) та виведення його на консоль
//             let element = matrix[x][y];
//             // console.log(`Елемент на позиції (${x}, ${y}): ${element}`);
//             if (element == 0) {
//                 drow = false
//             }
//         }
//     }

//     return drow
// }

// let matrix = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
// ]

// let first_player_move1 = true

// function move() {
//     let curent_symb

//     if (first_player_move1) {
//         let userImput = prompt("enter your move (0, 1, 2)")

//         let userImputArray = userImput.split(",")

//         userImputArray[0] = Number(userImputArray[0])
//         userImputArray[1] = Number(userImputArray[1])

//         matrix[userImputArray[0]][userImputArray[1]] = "X"
//         curent_symb = "X"

//     }
//     else {
//         let x = getRandomInt(0, 3)
//         let y = getRandomInt(0, 3)

//         while (true) {
//             if (matrix[x][y] == 0) {
//                 break;
//             }
//             else {
//                 x = getRandomInt(0, 3)
//                 y = getRandomInt(0, 3)
//             }

//         }

//         matrix[x][y] = "O"
//         curent_symb = "O"
//     }

//     first_player_move1 = !first_player_move1

//     console.clear();

//     // curent_symb = "X"
//     console.log(curent_symb);
//     if (checkCol(matrix, 0, curent_symb) || checkCol(matrix, 1, curent_symb) || checkCol(matrix, 2, curent_symb) || checkCol(matrix, 0, curent_symb) || checkRow(matrix, 1, curent_symb) || checkRow(matrix, 2, curent_symb) || checkDiag1(matrix, curent_symb) || checkDiag2(matrix, curent_symb)) {
//         alert(`Перемога ${curent_symb}`);
//         // break;
//     }

//     if (checkDrow(matrix)) {
//         alert("Нічія")
//         // break;
//     }

//     console.log(matrix[0]);
//     console.log(matrix[1]);
//     console.log(matrix[2]);
//     // Отримуємо посилання на контейнер у DOM
//     const matrixContainer = document.getElementById("matrixContainer");
//     matrixContainer.

//     // Цикл для створення рядків
//     for (let i = 0; i < matrix.length; i++) {
//         const row = document.createElement("div");
//         row.className = "row";

//         // Цикл для створення елементів у рядку
//         for (let j = 0; j < matrix[i].length; j++) {
//             const element = document.createElement("div");
//             element.className = "element";
//             element.textContent = matrix[i][j];

//             // Додаємо елемент до рядка
//             row.appendChild(element);
//         }

//         // Додаємо рядок до основного контейнера
//         matrixContainer.appendChild(row);
//     }
// }






// // Отримання посилань на елементи сторінки
// const viewDataButton = document.getElementById("viewData");
// const inputArea = document.getElementById("inputArea");
// const outputDiv = document.getElementById("output");

// // Функція, яка обробляє та виводить дані з JSON-рядка
// function run() {
//     const jsonData = prompt();
//     try {
//         // Розпарсити JSON-рядок
//         const data = JSON.parse(jsonData);

//         // Очистити попередній вміст
//         outputDiv.innerHTML = "";

//         // Створити вміст сторінки на основі даних з JSON
//         const pageTitle = document.createElement("h2");
//         pageTitle.textContent = `Page of ${data.name} ${data.surname}`;
//         outputDiv.appendChild(pageTitle);

//         const nameLine = document.createElement("p");
//         nameLine.textContent = `Name: ${data.name}`;
//         outputDiv.appendChild(nameLine);

//         const surnameLine = document.createElement("p");
//         surnameLine.textContent = `Surname: ${data.surname}`;
//         outputDiv.appendChild(surnameLine);
//     } catch (error) {
//         // Вивести повідомлення про помилку, якщо JSON некоректний
//         outputDiv.textContent =
//             "Invalid JSON input. Please enter valid JSON data.";
//     }
// }







let auto_ids = []



let game_state = {
    score: 0,
    main_click_level: 1,
    autoclick_level: 1,
}

function butter_click() {
    game_state.score += game_state.main_click_level
    update_html()

    
}
let butt = document.getElementById("butt")

butt.onclick = butter_click





function SaveJson() {

    const jsonString = JSON.stringify(game_state);
    alert(jsonString); // Виводить JSON-рядок
}
let save = document.getElementById("Save")
save.onclick = SaveJson

function update_html() {
    butt.innerText = game_state.score

}



function login() {
    for (let i = 0; i < auto_ids.length; i++) {
        clearInterval(auto_ids[i])
    }


    const jsonString = prompt("Ведіть свій пароль:")

    game_state = JSON.parse(jsonString)

    if (game_state.autoclick_level > 1) {
        for (let i = 0; i < game_state.autoclick_level; i++) {
            auto_ids.push(setInterval(autoclick_main, 1000))
        }
    }



}

let Login = document.getElementById("Login")
Login.onclick = login



function calculate_level_price(level, modifier) {
    return (level * 100) * modifier;
}


function level_up() {
    let level_price = calculate_level_price(game_state.main_click_level, 1)

    if (game_state.score >= level_price) {

        game_state.main_click_level++

        game_state.score -= level_price
        update_html()
    }
    else {
        console.error(`balance low: balance:[${game_state.score}]; level-price:[${level_price}]`);
    }

    level_price = calculate_level_price(game_state.main_click_level, 1)

    levelup.innerHTML = "level up" + level_price


        ;

}

let levelup = document.getElementById("levelup")

levelup.onclick = level_up






function autoclick_main() {

    game_state.score += game_state.main_click_level
    butt.innerText = game_state.score
}

function calculate_click_price(level, modifier) {
    return (level * 500) * modifier;
}

function autoclick_click() {

    let level_price = calculate_click_price(game_state.autoclick_level, 1)
    if (game_state.score >= level_price) {

        game_state.score -= level_price
        game_state.autoclick_level++
        auto_ids.push(setInterval(autoclick_main, 1000))
    }
    else {
        console.error(`balance low: balance:[${game_state.score}]; level-price:[${level_price}]`);
    }

    level_price = calculate_click_price(game_state.autoclick_level, 1)
    autoclick.innerHTML = "autoclick" + level_price


}
let autoclick = document.getElementById("autoclick")

autoclick.onclick = autoclick_click
