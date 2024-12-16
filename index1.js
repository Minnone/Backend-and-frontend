const imageElement = document.querySelector('img');
    if (imageElement) {
        // Увеличение размера изображения при наведении
        imageElement.addEventListener('mouseover', () => {
            imageElement.style.transform = 'scale(1.1)';
        });

        // Возвращение к исходному размеру при уходе курсора
        imageElement.addEventListener('mouseout', () => {
            imageElement.style.transform = 'scale(1)';
        });

        // Замена изображения при клике
        imageElement.addEventListener('click', () => {
            imageElement.src = 'favteacher.jpg';
        });

        // Показать предупреждение при двойном клике
        imageElement.addEventListener('dblclick', () => {
            alert("Не нажимайте слишком сильно, у меня не так много любимых учителей.");
        });

        imageElement.style.transition = 'transform 0.5s ease'; // Устанавливаем плавный переход

        imageElement.addEventListener('mouseover', function() {
            imageElement.style.transform = 'rotate(360deg)'; // Вращаем изображение на 360 градусов
        });

        imageElement.addEventListener('mouseout', function() {
            imageElement.style.transform = 'rotate(0deg)'; // Возвращаем изображение в исходное положение
        });
    }