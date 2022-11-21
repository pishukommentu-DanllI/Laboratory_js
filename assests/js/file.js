'use strict';

function task_1() {
    // создаю таймер
    setTimeout(() => {
        // вызываю метод прокрутки
        window.scrollBy(0, 500);
    }, 3000);

};

function task_2() {
    //забираем высоту уже прокрученной области у основного окна с помощью метода pageYOffset
    if (window.pageYOffset > 0) {
        console.log('Есть');
    };
};


function task_3() {
    // инцилизируем форму
    let form = document.querySelector('#form');
    // сумма
    let s = 0;
    // перебераем input из формы по циклу 
    for (let i of form.getElementsByTagName('input')) {
        s += +i.value;
    
    };
    alert(s);
};


// задание 4
// создаем объект с псевдогородами
let obj = {
    a: ['a_1', 'a_2', 'a_3'],
    b: ['b_1', 'b_2', 'b_3'],
    c: ['c_1', 'c_2', 'c_3']
}
// добавляем select с городами после основного select-а
document.getElementById('4').insertAdjacentHTML('afterend', `  <select id="city"></select>`)

// проходимся по объекту с ключом значения выбраного option 
for (let i of obj[document.getElementById('4').value]) {
    // добавляем в select городами псевдогород
    document.getElementById("city").insertAdjacentHTML('beforeend', `<option>${i}</option>`)

}
// добавляем событие "change" к основному selction
document.getElementById('4').addEventListener('change', event => {
    // берем список городов. Живая коллекция
    let s = document.querySelector("#city");
    
    for (let i of s) {
        // проходимся по списку и удаляем старые option
        i.remove()
    }
    // из-за того что коллекция живая, то удаляем первый эелмент который остался от старой коллекции
    s[0].remove()
    
    // добавляем  из объекта новые псевдогорода к selection с городами 
    for (let i of obj[document.getElementById('4').value]) {
        document.getElementById("city").insertAdjacentHTML('beforeend', `<option>${i}</option>`)
    }

})

// задание 5
// добавляем по id новый li
document.getElementById('5').insertAdjacentHTML('beforeend', '<li>пункт</li>');


// задание 6
for (let i of document.getElementsByTagName('a')) {
    // добавляем событие при наведении
    i.addEventListener('mouseover', event => {
        event.target.insertAdjacentHTML('afterend', `<span id='6'>${event.target.href}</span>`);
    });

    // добавляем событие при выходе из поля элемента
    i.addEventListener('mouseout', event => {
        document.getElementById('6').remove();
    });

};

// задание 7
// забираем начальный текст у элемента
let text = document.getElementById('7').textContent;
// анулируем значение тега
document.getElementById('7').textContent = '';
for (let i of text) {
    // добавляем в контент тега число в квадрате 
    document.getElementById('7').textContent += Number(i) ** 2;
};

// счет нажатий
let chet_8 = 0;

function task_8(elem) {
    // увеличиваем счет и присваеваем
    chet_8++;
    elem.textContent = chet_8;
};

function task_9() {
    // добавляем тег li в ul
    document.getElementById('9').insertAdjacentHTML('beforeend', '<li>пункт</li>');
};

document.getElementById('9').addEventListener('click', event => {
    // проверяем тег явялеттся ли он li
    if (event.target.tagName == 'LI') {
        // добавляем ! к li 
        event.target.textContent +=' !';
    };
});

// добавляем событие click  на форму
document.querySelector('#table10').addEventListener('click', event => {
    // проверяем имя класса
    if (event.target.className == 'table10_block') {
        // меняем значение ячейки
        event.target.textContent = prompt('Значение ячекйки', 'Cell');
    }
})

function send_form_table() {
    // инцилизируем переменные
    let table = document.getElementById('10')
    let name = table.name.value
    let suname = table.suname.value
    // добавляем к таблице новую ячейку
    document.querySelector('#table10').insertAdjacentHTML('beforeend', `<tr> <td class="table10_td"><div class="table10_block">${name}</div></td>  <td class="table10_td"><div class="table10_block">${suname}</div></td></tr>`)
}


