
//создаем модель таскборда
let data = localStorage.getItem('boards');
console.log(data)

//если нет сохраненного то выдаем стартовый объект
if (data == null) {
    //перезаписываем data
    data = {
        "boards": [
            {
                "title": "Доска",
                "columns": [
                    {
                        "title": "Задачи",
                        "cards": [

                        ]
                    }
                ]
            }
        ]
    };
} else {
    data = JSON.parse(data);
}

console.log(data)



renderBoards();

let wallpaperDB = {
    "0": "0.jpg",
    "1": "1.jpg",
    "2": "2.jpg",
    "3": "3.jpg",
    "4": "4.jpg",
    "5": "5.jpg",
    "6": "6.jpg",
    "7": "7.jpg",
    "8": "8.jpg",
    "9": "9.jpg",
    "10": "10.jpg",
    "11": "11.jpg",
    "12": "12.jpg",
    "13": "13.jpg",
    "14": "14.jpg",

}









//функция сохранения
function save() {

    //кодируем data в json
    let dataJson = JSON.stringify(data);

    //сохраняем в localStorage
    localStorage.setItem('boards', dataJson);
}


//функция отрисовки досок
function renderBoards() {

    //получаем шаблоны
    let tmpl_board = document.getElementById('tmpl-board').innerHTML;
    let tmpl_column = document.getElementById('tmpl-column').innerHTML;
    let tmpl_card = document.getElementById('tmpl-card').innerHTML;

    //находим контейнер под доски
    let container = document.getElementById('boards');

    //очищаем доски
    container.innerHTML = '';

    //в цикле подставляем данные в шаблоны (СОБИРАЕМ ДОСКИ)
    for (let i = 0; i < data['boards'].length; i++) {


        //собираем html колонок доски  (СОБИРАЕМ КОЛОНКИ ДОСКИ)
        let boardColumns = '';
        for (let j = 0; j < data['boards'][i]['columns'].length; j++) {


            //собираем html карточек колонки (СОБИРАЕМ КАРТОЧКИ КОЛОНКИ)
            let columnCards = '';
            for (let k = 0; k < data['boards'][i]['columns'][j]['cards'].length; k++) {

                //html одной карточки
                let cardHtml = tmpl_card.replace('${card_header}', data['boards'][i]['columns'][j]['cards'][k]['title'])
                    .replace('${column_number}', j)
                    .replace('${card_number}', k)
                    .replace('${card_content}', data['boards'][i]['columns'][j]['cards'][k]['description']);

                //добавляем готовый текст карточки к картокам КОЛОНКИ
                columnCards += cardHtml;

            }

            //html одной колоночки
            let columnHtml = tmpl_column.replace('${column_header}', data['boards'][i]['columns'][j]['title'])
                .replace('${column_number}', j)
                .replace('${column_number}', j)
                .replace('${column_number}', j)
                .replace('${column_number}', j)
                .replace('${column_number}', j)
                .replace('${column_number}', j)
                .replace('${column_number}', j)
                .replace('${column_number}', j)
                .replace('${column_content}', columnCards)
                .replace('${columnIdCreateTask}', data['boards'][i]['columns'][j]['id'])
                .replace('CreateTaskBlock${columnIdCreateTask}', data['boards'][i]['columns'][j]['id']);

            //добавляем готовый текст КОЛОНКИ к колонкам ДОСКИ
            boardColumns += columnHtml;
        }
        //подстваляем данные в шаблон доски и добавляем в контейнер
        container.innerHTML += tmpl_board.replace('${board_header}', data['boards'][i]['title'])
            .replace('${board_background}', data['boards'][i]['background'])
            .replace('${board_background}', data['boards'][i]['background'])
            .replace('${board_number}', i)
            .replace('${board_number}', i)
            .replace('${board_content}', boardColumns);
        //ниже не работает :(
        // renderWallpapers()
        //  let wallpapersClasslen = document.getElementsByClassName('wallpaperPrev')
        // for(let s = 0; s<wallpapersClasslen.length; s++){
        //     let wallpapersClass = document.getElementsByClassName('wallpaperPrev') //оказывается нельзя найти 1 элемент по классу
        //     wallpapersClass.innerHTML.replace('${board_number}', i)
        //     // console.log(wallpapersClass[s]);
        //     console.log(i);
        //     console.log();
        // }
        
    }


}

//функция переименования доски
function boardRename(number) {

    let name = event.target.value;

    data['boards'][number]['title'] = name;

    save();
}

//функция для замены обоев
function boardChangeBackground(number) {

    //получаем ссылку на фон
    let background = event.target.value;

    //обновляем фон в модели
    data['boards'][number]['background'] = background;

    //сохраняем
    save();

    //перерисовываем
    renderBoards();

}

//функция создания колонки
function columnAdd() {
    let columnId = data['boards'][0]['columns'].length; //Узнаем кол-во колонок что бы дать каждому уникальный id
    console.log(columnId);
    //создаем пустую колонку
    let column = {
        "title": "Новая колонка",
        "cards": [],
        "id": [columnId]
    };

    //добавляем колонку на доску
    data['boards'][0]['columns'].push(column)

    //вывести модель в консоль
    console.log(data);

    //перерисовываем доски
    renderBoards();

    save();

}

//функция переименования колонки
function columnRename(number) {

    //определяем содержимое инпута
    let name = event.target.value;

    //перезаписываем имя колонки в модели
    data['boards'][0]['columns'][number]['title'] = name;

    //сохраняем
    save();
}

//функция для удаления колонок
function columnDelete(number) {

    //спросить подтверждение
    let ok = confirm("Вы действительно хотите удалить колонку?");  //true / false

    if (ok) {

        //удаляем колонку из модели
        data['boards'][0]['columns'].splice(number, 1);

        //сохраняем
        save();

        //перерисовываем
        renderBoards();
    }

}

//функция добавления карточки(задачи)
function cardAdd(number) {

    //создаем пустую карточку
    let card = {};

    //получить содержимое текстового поля
    let titleId = 'card-title' + number
    let descriptionId = 'card-description' + number
    let title = document.getElementById(titleId).value;
    let description = document.getElementById(descriptionId).value;
    console.log(title);
    console.log(description);

    //наполняем карточку полученными данными
    card['title'] = title;
    card['description'] = description;

    //добавить карточку в модель
    data['boards'][0]['columns'][number]['cards'].push(card);

    //вывести модель в консоль
    console.log(data);

    //перерисовываем доски
    renderBoards();

    save();

}

//функция удаления карточки
function cardDelete(column_number, card_number) {

    //спросить подтверждение
    let ok = confirm("Вы действительно хотите удалить карточку?");  //true / false

    if (ok) {

        //удаляем колонку из модели
        data['boards'][0]['columns'][column_number]['cards'].splice(card_number, 1);

        //сохраняем
        save();

        //перерисовываем
        renderBoards();
    }

}
//Функция показа интерфейса для создания задачи
function btnCreateTask(number) {
    let idbutton = 'btnCreateTask' + number
    let idInterface = 'createTaskInterface' + number
    document.getElementById(idbutton).classList.add('hidden');
    document.getElementById(idInterface).classList.remove('hidden');
}

function turnSettings() {
    let panel = document.getElementById('settingsBtns')

    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden')
    } else {
        panel.classList.add('hidden')
    }

}

function clearAll() {
    let userconfirm = confirm('Do you want to delete all data? this process is unreturnable.')
    if (userconfirm) {
        data = null
        window.localStorage.clear()
        location.reload(true)
    }

}
function changeWallpaperInterface(){
    let wallpaperInterface = document.getElementById('wallpaperInterface')
    if (wallpaperInterface.classList.contains('hidden')) {
        wallpaperInterface.classList.remove('hidden')
        renderWallpapers()
    } else {
        wallpaperInterface.classList.add('hidden')
        return;
}
}

function renderWallpapers(){
    let targetrender = document.getElementById('wallpapersBlock')
    let prevexist = document.getElementsByClassName('wallpaperPrev')
    let boardNumber = '${board_number}' //так как у нас для реплейса исп вид ${..} то что бы всунуть ее не как переменну нижу преобразуем её в строку
    console.log(prevexist);
    if(prevexist.length == 0){ //Проверка на существование уже зарендеренных обоев
        for (let i = 0; i < 15; i++) { //отрисовка обоев
            targetrender.insertAdjacentHTML("beforeend", `
            <div class="wallpaperPrev" onclick="backgroundChange(${i})" style="background-image: url('wallpapers/${i}.jpg')";'></div>     
            `)
            alreadyrendered = true
        }
    }else{
        return
    }

}


function backgroundChange(id) {
    for(let i = 0; i < data['boards'].length; i++){
    data['boards'][i]['background'] = `wallpapers/${id}.jpg`
    }
    save()
    renderBoards()
}
