// Функция для получения случайной цитаты
function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Объект генератора цитат
const QuoteGenerator = {
    quotes: [
        "Жизнь - это то, что происходит с тобой, пока ты строишь другие планы. - Джон Леннон",
        "Единственный способ сделать великую работу - любить то, что ты делаешь. - Стив Джобс",
        "Будь тем изменением, которое ты хочешь видеть в мире. - Махатма Ганди",
        "Успех - это способность переходить от одной неудачи к другой без потери энтузиазма. - Уинстон Черчилль",
        "Самый большой враг знания - не невежество, а иллюзия знания. - Стивен Хокинг"
    ],

    // Метод для получения случайной цитаты
    getRandom() {
        return getRandomQuote(this.quotes);
    },
};

// Функция для отображения случайной цитаты
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomQuote = QuoteGenerator.getRandom();
    

    
    setTimeout(() => {
        quoteDisplay.innerHTML = `"${randomQuote}"`;
        quoteDisplay.style.opacity = '1';
    }, 300);
}
