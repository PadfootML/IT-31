// ініціалізуємо елементи в змінну для подальшої роботи з ними
// ініціалізуємо тег body через його id 
let body = document.getElementById('body');
let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
// ініціалізуємо текст блоків
let change2 = document.getElementById("change2");
let change3 = document.getElementById("change3");
// ініціалізуємо тест для кольору шрифта першого великого тексту на сайті
let changeText = document.getElementById('change');
// ініціалізуємо заголовок h1
let title = document.getElementById("title");
// ініціалізуємо футер
let footer = document.getElementById('footer');
// ініціалізуємо меню
let menu = document.getElementById('menu');
// ініціалізуємо чекбокси
let list  = document.getElementById('list');



// добавлення події при наведенні курсора на текст
changeText.addEventListener("pointerover", function () {
    this.style.color = 'white';
    this.style.background = 'black';
})

// добавлення події при натисканні мишкою на текст
changeText.addEventListener("pointerdown",  function () {
    this.style.color = 'red';
    this.style.background = 'grey';
})
// добавлення події на припинення натискання мишкою на текст
changeText.addEventListener("pointerup", function () {
    this.style.color = 'blue';
    this.style.background = 'violet';
})
// добавлення події при вилученні курсора з тексту
changeText.addEventListener("pointerout", function () {
    this.style.color = 'black';
    this.style.background = 'none';
})

// міняємо кольори шрифтів, футера та фото сайту
btn.addEventListener("click", function () {
    changeText.style.color = 'white';
    change2.style.color = 'white';
    change3.style.color = 'white';
    title.style.color = 'white';
    list.style.color = 'white';
    body.style.backgroundImage = 'url(img/darkImg.jpg)';
    this.style.display = 'none'; // звертаємось до btn
    btn1.style.display = 'block';
    footer.style.color = ' lightslategray';
    footer.style.background = 'white';
    menu.style.color = 'white';
})

// міняємо кольори шрифтів, футера та фото сайту в початковий стан який прописаний в CSS
btn1.addEventListener("click", function () {
    changeText.style.color = 'black';
    change2.style.color = 'black';
    change3.style.color = 'black';
    title.style.color = 'black';
    list.style.color = 'black';
    body.style.backgroundImage = 'url(img/lightImg.jpg)';
    this.style.display = 'none'; // звертаємось до btn1
    btn.style.display = 'block';
    footer.style.color = 'white ';
    footer.style.background = 'lightslategray';
    menu.style.color = 'black';
})