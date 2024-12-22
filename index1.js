document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.querySelector('img[alt="me"]');
    if (imageElement) {
        let isOriginalImage = true; // Флаг для отслеживания состояния изображения
        const originalSrc = imageElement.src; // Сохраняем исходный путь к изображению
        const newSrc = 'favteacher.jpg'; // Путь к новому изображению

        // Замена изображения при клике
        imageElement.addEventListener('click', () => {
            if (isOriginalImage) {
                imageElement.src = newSrc;
            } else {
                imageElement.src = originalSrc;
            }
            isOriginalImage = !isOriginalImage; // Переключаем флаг
        });

        // Показать предупреждение при двойном клике
        imageElement.addEventListener('dblclick', () => {
            alert("Не нажимайте слишком сильно, у меня не так много любимых учителей.");
        });
    }
});
