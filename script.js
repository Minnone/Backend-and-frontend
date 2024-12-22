// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.getElementsByClassName("close")[0];

// Функция для открытия модального окна
function openModal(service) {
    modalTitle.textContent = `Форма обратной связи для ${service}`; // Устанавливаем заголовок
    modal.style.display = "block"; // Показываем модальное окно
}

// Функция для закрытия модального окна
closeBtn.onclick = function() {
    modal.style.display = "none"; 
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
}

// Назначаем обработчики событий на кнопки
const buttons = document.querySelectorAll(".open-modal");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const service = button.getAttribute("data-service"); // Получаем название услуги
        openModal(service); // Открываем модальное окно с заголовком
    });
});
$(document).ready(function() {
    $('#phone-input').mask('+7 (000) 000-00-00');
});

//tetrad 11

function submitForm() {
    const formData = new FormData();
    const formElements = document.querySelectorAll('[data-name]');

    for (const element of formElements) {
        const name = element.getAttribute('data-name');
        const type = element.getAttribute('data-type');
        let value;

        if (type === 'checkbox') {
            value = element.checked;
        } else {
            value = element.value.trim();
        }

        // Валидация
        if (type === 'text' && value === '') {
            alert(`Поле '${name}' не должно быть пустым.`);
            return;
        }
        if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            alert("Введите корректный e-mail.");
            return;
        }
        if (type === 'phone' && !/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value)) {
            alert("Телефон должен быть в формате +7 (000) 000-00-00.");
            return;
        }
        if (type === 'checkbox' && !value) {
            alert("Вы должны дать согласие на обработку данных.");
            return;
        }

        formData.append(name, value);
    }

    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    modal.style.display = "none";
}

document.querySelector('.aply').addEventListener('click', submitForm);
