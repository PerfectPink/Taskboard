
//создаем модель таскборда
let data = localStorage.getItem('boards');
console.log(data)

//если нет сохраненного то выдаем стартовый объект
if (data == null) {
    //перезаписываем data
    data = {
        "boards": [
            {
                "title": "Новая Доска",
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

//номер текущей  доски достаем из хранилища
let currentBoardId = localStorage.getItem('current_board');
//если еще не сохраняли номер
if (currentBoardId == null) {
    currentBoardId = 0;
}

//адрес юзера в telegram
let chat_id = 143596773;

//список фонов
let backgrounds = [
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop1.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop2.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop3.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop4.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop5.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop6.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop7.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop8.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop9.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Popular/pop10.jpg',

    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime1.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime2.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime3.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime4.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime5.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime6.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime7.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime8.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime9.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Anime/Anime10.jpg',

    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy1.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy2.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy3.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy4.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy5.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy6.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy7.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy8.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy9.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Fantasy/fantasy10.jpg',


    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower1.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower2.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower3.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower4.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower5.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower6.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower7.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower8.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower9.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Flower/flower10.jpg',


    'https://perfectpink.github.io/NordWallpapers/img/Food/Food1.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food2.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food3.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food4.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food5.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food6.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food7.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food8.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food9.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Food/Food10.jpg',

    'https://perfectpink.github.io/NordWallpapers/img/Space/space1.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space2.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space3.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space4.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space5.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space6.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space7.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space8.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space9.jpg',
    'https://perfectpink.github.io/NordWallpapers/img/Space/space10.jpg',

];


//запускаем рассыльщик чеерз каждые 5 сек
setInterval(function () {
    sender();
}, 10000); //5000



//функция рассылки
function sender() {
   var date = new Date()
   var dateNow = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + '/' + date.getHours() + ':' + date.getMinutes()
    //бежим по всем доскам в модели
    for (let i = 0; i < data['boards'].length; i++) {

        //бежим по всем колонкам доски
        for (let j = 0; j < data['boards'][i]['columns'].length; j++) {

            //бежим по всем карточкам колонки
            for (let k = 0; k < data['boards'][i]['columns'][j]['cards'].length; k++) {
                
                //делаем рассылку задачи если установлено время (ВОТ ТУТ СДЕЛАТЬ СРАВНЕНИЕ ВРЕМЕНИ)
                if ( data['boards'][i]['columns'][j]['cards'][k]['time']) { //&& cardData == dateNow
                    let cardDate = new Date(data['boards'][i]['columns'][j]['cards'][k]['time'])
                    console.log('cardDate = ', cardDate);
                    let notificationDate = cardDate.getDate() + '/' + cardDate.getMonth() + '/' + cardDate.getFullYear() + '/' + cardDate.getHours() + ':' + cardDate.getMinutes()
                    // console.log('Карточка дата: ',data['boards'][i]['columns'][j]['cards'][k]['time'])
                    // console.log('Могу ли я применить getHours() сюда?', data['boards'][i]['columns'][j]['cards'][k]['time'].getHours());
                    // console.log('Ныне время: ' ,dateNow);
                    if(notificationDate == dateNow){
                        sendMessage(data['boards'][i]['columns'][j]['cards'][k]['title'], chat_id);
                        data['boards'][i]['columns'][j]['cards'][k]['time'] = '';
                        save()
                        renderBoards()
                    }
                    //отправка сообщения в telegram
                    

                    //ставим отметку что уже отправлялась просто затирая время
                    
                }
            }

        }
    }

    save();

    //если время совпало то делаем отправляем эту задачу в телеграм и помечаем что она отослана (убираем время)
}

//функция для отправки соощения
function sendMessage(text, сhat_id) {

    //формируем адрес запроса
    let url = "https://api.telegram.org/bot5651438330:AAGh-ktqtui8MRrTj43kwUGikBb6XtFhHV8/sendMessage?chat_id=" + сhat_id + "&text=" + text;

    //отправляем запрос на этот адрес
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)  //тут мы отправляем данные АСИНХРОННО и не ждем ответ
    xhr.send();
}

console.log(data)



renderBoards();

renderBackgrounds();




//функция чтобы открыть и спрятать меню
function toggleMenu() {

    document.getElementById('sidebar').classList.toggle('sidebar-active');
}

//функция чтобы открыть и спрятать меню
function toggleBoardsList() {

    document.getElementById('side-menu').classList.toggle('side-menu-active');
}


//функция сохранения
function save() {

    //кодируем data в json
    let dataJson = JSON.stringify(data);

    //сохраняем в localStorage
    localStorage.setItem('boards', dataJson);

    //сохраняем номер текущей доски
    localStorage.setItem('current_board', currentBoardId);
}

//функция для смены фона
function changeBackground() {

    //получаем катинку из плитки
    let background = event.target.getAttribute('data-background');

    data['boards'][currentBoardId]['background'] = background;

    renderBoards();

    save();
}

//функция для переключения досок
function changeBoard() {

    //определяем номер доски на которую кликнули
    let num = event.target.getAttribute('data-num');

    //меняем тукущий номер доски
    currentBoardId = num;

    //перерисовываем доски с учетом номера текущей доски
    renderBoards();

    //звкрываем меню
    toggleBoardsList();

    save();

}


//функция для отрисовки плиток с фоном
function renderBackgrounds() {

    //получаем шаблоны
    let tmpl_background = document.getElementById('tmpl-background').innerHTML;

    //находим контейнер под доски
    let container = document.getElementById('background-place');

    //в цикле подставляем данные в шаблоны (СОБИРАЕМ ФОНЫ)
    for (let i = 0; i < backgrounds.length; i++) {

        container.innerHTML += tmpl_background.replace('${background_image}', backgrounds[i])
            .replace('${background_image}', backgrounds[i]);
    }
}

//функция для отрисовки плиток с фоном
function renderBoardsList() {

    //получаем шаблоны
    let tmpl_board = document.getElementById('tmpl-board-line').innerHTML;

    //находим контейнер под доски
    let container = document.getElementById('side-menu');

    //очищаем контейнер
    container.innerHTML = '';

    //в цикле подставляем данные в шаблоны (СОБИРАЕМ ФОНЫ)
    for (let i = 0; i < data['boards'].length; i++) {

        container.innerHTML += tmpl_board.replace('${board_title}', data['boards'][i]['title'])
            .replace('${board_num}', i)
            .replace('${prevBck}',data['boards'][i]['background']);
    }
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

        //если номер доски в списке не совпадет с номером текущей доски то не рисуем ее
        if (i != currentBoardId) {
            continue;
        }


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
                    .replace('${card_notification}', data['boards'][i]['columns'][j]['cards'][k]['time'])
                    .replace('${card_notification}', (data['boards'][i]['columns'][j]['cards'][k]['time'] != '') ? '&#10148;' : '')
                    .replace('${card_content}', data['boards'][i]['columns'][j]['cards'][k]['description']);
                //добавляем готовый текст карточки к картокам КОЛОНКИ
                columnCards += cardHtml;

            }

            //html одной колоночки
            let columnHtml = tmpl_column.replace('${column_header}', data['boards'][i]['columns'][j]['title'])
                .replace('${column_number}', j)
                .replace('${column_number}', j)
                .replace('${board_number}', i)
                .replace('${column_number}', j)
                .replace('${column_content}', columnCards);

            //добавляем готовый текст КОЛОНКИ к колонкам ДОСКИ
            boardColumns += columnHtml;

        }

        //подстваляем данные в шаблон доски и добавляем в контейнер
        container.innerHTML += tmpl_board.replace('${board_header}', data['boards'][i]['title'])
            .replace('${board_background}', data['boards'][i]['background'])
            .replace('${board_background}', data['boards'][i]['background'])
            .replace('${board_number}', i)
            .replace('${board_number}', i)
            .replace('${board_number}', i)
            .replace('${board_content}', boardColumns);
    }

    renderBoardsList();
}

//функция переименования доски
function boardRename(number) {

    let name = event.target.value;

    data['boards'][number]['title'] = name;

    save();
}

//функция создания новой доски
function boardAdd() {

    //создаем объект новой доски
    let board = {
        "title": "Новая доска",
        "columns": [
            {
                "title": "Задачи",
                "cards": []
            }
        ]
    };

    //добавляем объект в модель
    data['boards'].push(board);

    //переключаемся на новую доску
    currentBoardId = data['boards'].length - 1;

    //отрисовать доску
    renderBoards();

    //сохранить данные
    save();

}


function boardDelete(boardID) {
    data['boards'].splice(boardID,1)
    //сплайсим из модели текущую доску по номеру
    save()
    //сохраняем
    currentBoardId = 0
    //меняем текущий номер доски на 0
    renderBoards()
    //перерисовываем
}


//функция создания колонки
function columnAdd() {

    //создаем пустую колонку
    let column = {
        "title": "Новая колонка",
        "cards": []
    };

    //добавляем колонку на доску
    data['boards'][currentBoardId]['columns'].push(column)

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
    data['boards'][currentBoardId]['columns'][number]['title'] = name;

    //сохраняем
    save();
}

//функция для удаления колонок
function columnDelete(number) {

    //спросить подтверждение
    let ok = confirm("Вы действительно хотите удалить колонку?");  //true / false

    if (ok) {

        //удаляем колонку из модели
        data['boards'][currentBoardId]['columns'].splice(number, 1);

        //сохраняем
        save();

        //перерисовываем
        renderBoards();
    }

}

//функция добавления карточки(задачи)
function cardAdd(board_number, column_number) {

    //создаем пустую карточку
    let card = {};

    //получить содержимое текстового поля
    let title = event.target.closest('.card-form').querySelector('.card-title').value;
    let description = event.target.closest('.card-form').querySelector('.card-description').value;
    let time = event.target.closest('.card-form').querySelector('.card-time').value;
    if (title == '' && description == ''){
        alert('you cant add empty card')
        return
    }
    //наполняем карточку полученными данными
    card['title'] = title;
    card['description'] = description;
    if(time){ //не работает : 'undefined', '', ' ', null, 'Invalid Date'
        console.log(time.value);

        var notifDate = new Date(time);
        card['time'] = notifDate.toString(); 

        console.log('проверка пройдена с положительным результатом');
    }else{
        console.log('проверка не пройдена');
        console.log(time.value);
    }
    

    //добавить карточку в модель
    data['boards'][board_number]['columns'][column_number]['cards'].push(card);

    //вывести модель в консоль
    console.log(data);
    console.log(card);
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
function toggleCreationTsk(){
    event.target.classList.toggle('hidden')
    event.target.closest('.card-form').querySelector('#creationTsk').classList.toggle('hidden')

}
function changeSettingsPanel(){
    let panel = document.querySelector('.settingspanel')
    panel.classList.toggle('hidden')
}
function clearAll(){
    let userconfirm = confirm('Do you want to delete all data? this process is unreturnable.')
    if (userconfirm) {
        data = null
        window.localStorage.clear()
        currentBoardId = 0
        location.reload(true)
    }
}

// window.onload = function(){
//     var panel = document.getElementById('settingsPanel')
//     document.onclick = function(e){
//         if(e.target.id != 'settingsPanel' || e.target.id == 'settingspanelBtn' ){
//             panel.classList.classList.add('hidden')
//         }
//     }
// }