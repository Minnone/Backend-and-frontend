function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        if (element.style.display === "none" || getComputedStyle(element).display === "none") {
            element.style.display = "";
        } else {
            element.style.display = "none";
        }
    }
}

function updateH1FromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');
    if (utmTerm && h1Element) {
        h1Element.textContent = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    console.log(timeString);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

let isSecondSemester = false; // Флаг для отслеживания состояния таблицы

function toggleTableSemester() {
    const tableBody = document.querySelector('.table tbody');
    if (tableBody) {
        if (isSecondSemester) {
            // Темы первого семестра
            tableBody.innerHTML = `
                <tr><td>1</td><td>Основы языка HTML</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>2</td><td>Формы и кнопки в HTML</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>3</td><td>Таблицы и интерактивные элементы HTML</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>4</td><td>Основы работы с CSS</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>8</td><td>Bootstrap</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>9</td><td>Основы языка JavaScript</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>10</td><td>Базовые задачи на JS</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>11</td><td>DOM-структура приложений и работа с объектами в языке JS</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>12</td><td>Встраивание скриптов</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>13</td><td>Отладка сценариев</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>14</td><td>Анимации и работа с ними</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>15</td><td>Github</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>16</td><td>Защита проекта</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
            `;
        } else {
            // Темы второго семестра
            tableBody.innerHTML = `
                <tr><td>1</td><td>Базовое приложение на backend</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>2</td><td>HTTP запросы</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>3</td><td>JSON и работа с ним</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>4</td><td>HTTP ответы</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>5</td><td>Проектирование API</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>6</td><td>Маршрутизация и её настройка</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>7</td><td>NoSQL базы данных</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>8</td><td>Обеспечение авторизации и доступа пользователей</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>9</td><td>Работа сторонних сервисов уведомлений и авторизации</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>10</td><td>Основы Reactos</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>11</td><td>Работа с динамическими компонентами DOM</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>12</td><td>Использование хуков в React</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>14</td><td>Основы микросервисной архитектуры</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>15</td><td>Разработка классических модулей веб-приложений</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
                <tr><td>16</td><td>Разработка классических модулей веб-приложений</td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr>
            `;
        }
        isSecondSemester = !isSecondSemester; // Переключаем флаг
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Скрипт загружен!");
    logCurrentTime();
    
    resetBackgroundColor(); 
    changeBackgroundColor("lightgrey");
    
    toggleVisibility('.content'); 
    updateH1FromUrl(); 

    const h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.addEventListener('click', () => {
            alert("Вы кликнули на заголовок - так держать!");
        });

        h1Element.addEventListener('mouseover', function() {
            h1Element.style.transition = 'transform 0.3s ease';
            h1Element.style.transform = 'scale(1.1)';
        });

        h1Element.addEventListener('mouseout', function() {
            h1Element.style.transform = 'scale(1)';
        });
    }

    const viewSecondSemesterButton = document.getElementById('viewSecondSemester');
    if (viewSecondSemesterButton) {
        viewSecondSemesterButton.addEventListener('click', toggleTableSemester);
    }

    const paragraph = document.getElementById('animatedParagraph');
    if (paragraph) {
        paragraph.addEventListener('click', () => {
            paragraph.style.backgroundColor = getRandomColor();
        });
    }

    const showLecturesButton = document.getElementById('showLecturesButton');
    const lecturesTable = document.getElementById('lecturesTable');

    if (showLecturesButton && lecturesTable) {
        showLecturesButton.addEventListener('click', () => {
            lecturesTable.classList.toggle('show');
        });
    }

    const addPracticeButton = document.getElementById('addPracticeButton');
    const newPracticeInput = document.getElementById('newPracticeInput');
    const practicesTableBody = document.getElementById('practicesTableBody');

    if (addPracticeButton && newPracticeInput && practicesTableBody) {
        addPracticeButton.addEventListener('click', () => {
            const newPracticeText = newPracticeInput.value.trim();
            if (newPracticeText) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td></td>
                    <td>${newPracticeText}</td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                `;
                practicesTableBody.appendChild(newRow);
                newPracticeInput.value = ''; // Очистить поле ввода
            }
        });
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
