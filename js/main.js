const border = {'border': '1px solid red'}
const block = {'display': 'block'}
const click = 'Ты кликнул на кнопку'
/* ====== События браузера и страницы ===== */

// $(function() {
// 	$('p').text('DOM элементы загружены')
// }); // Готовность DOM элементов
// $(function(){
//   $('p').text("DOM loaded")
// })
// $(window).load(function() {

// }); // Полная загрузка страницы

// $(window).unload(function(){
// 	alert('Пользователь, пока!');
// }) // Выход со страницы
// $(window).resize(function(event){
// 	console.log("resizing")
// })
// $(window).resize(function(event) {
// 	console.log('размеры окна изменены!')
// });	// Изменение размера (например, окна)

// $(window).scroll(function(event) {
// 	console.log('Страница прокручена')
// }); // Прокрутка элемента

/* ====== События клавиатуры ===== */

// $('input').keydown(function(event) {
// 	console.log($(this).val())
// }); // Клавиша в нажатом состоянии
// $('input').keydown(function(event){
//   console.log($(this).val())
// })

// $('input').keyup(function(event) {
// 	$('p').text($(this).val())
// }); // Клавиша больше не в нажатом состоянии
// $('input').keyup(function(event){
//   $('p').text($(this).val())
// })
// $('input').keypress(function(eventObject) {
// 	console.log(eventObject.which)
// }); // Ввод символа с клавиатуры

/* ====== События, связанные с мышью ===== */

// $('button').click(function() {
// 	console.log('Ты кликнул на кнопку');
// }); // Клик мышью
// $('button').click(function() {
//   console.log(click)
// })

// $('button').dblclick(function() {
// 	console.log('Ты кликнул на кнопку дважды');
// }); // Двойной клик мышью
// $('button').dblclick(function() {
//   console.log(click)
// })
// $('ul li').mouseenter(function(event) {
// 	$(this).css('color', 'red');
// }); // Наведение мыши на элемент

// $('ul li').mousedown(function(event) {
//   $(this).css('color', 'red');
// }); // Момент нажатия кнопки мыши

// $('ul li').mouseup(function(event) {
//   $(this).css('color', '#333');
// }); // Момент "отжатия" кнопки мыши :)

// $('ul li').mouseover(function(event) {
//   $(this).css('color', 'blue');
// });  // Мышь наезжает на площадь элемента

// $('ul li').mouseout(function(event) {
//   $(this).css('color', 'black');
// }); // Мышь покидает площадь элемента

// $('ul li').mousemove(function(event) {
//   $(this).toggleClass('blue');
// }); // Движение мыши над элементом

/* ====== Фильтры ===== */

/* Фильтры форм в jQuery */

// $('input').css('border', '1px solid red'); // Все поля input
// $('input').css(border)
// $('input:button').css('border', '1px solid red'); // Поле button - простая кнопка
// $('input:button').css(border)
// $('input:radio').css('display', 'block'); // Радио-кнопки
// $('input:radio').css(border)
// $('input:checkbox').css('display', 'block'); // Чекбоксы
// $('input:checkbox').css(block)
// $('input:text').css('border', '1px solid red');// Текстовые поля для ввода
// $('input:text').css(border)
// $('input:password').css('border', '1px solid red'); // Поле для ввода пароля
// $('input:password').css(border)
// $('input:file').css('border', '1px solid red'); // Поле для загрузки файла
// $('input:file').css(border)
// $('input:submit').css('border', '1px solid red'); // Кнопка "Отправить"
// $('input:submit').css(border)
// $('input:reset').css('border', '1px solid red'); // Кнопка "Сбросить"
// $('input:reset').css(border)
// $('input:image').css('border', '1px solid red'); // Кнопка-картинка
// $('input:image').css(border)
// $('input:focus').css('display', 'block'); // Выбранное поле (состояние фокус)
// $('input:focus').css(block)
// $('input:checked').css('border', '1px solid red'); // Выбранный чекбокс или радио-кнопка
// $('input:checked').css(border)
// $('input:enabled').css('border', '1px solid red'); // Доступное поле
// $('input:enabled').css(border)
// $('input:disabled').css('border', '1px solid red'); // Недоступное поле
// $('input:disabled').css(border)
/* ====== Фильтры ===== */

/* Фильтры по содержимому в jQuery */

// $('li:contains(файл)').css('border', 'solid 1px red'); // содержит текст
// $('li:contains(файл)').css(border)
// $('p:empty').text('Любой текст')  // пустой
// $('p:empty').text('Any text');
// $('h2:has(span)').css('border', '1px solid #000'); // имеет внутри селектор
// $('h2:has(span)').css(border)
// $('span:parent').css('border', '1px solid #000'); // обращение к родителю
// $('span:parent').css(border)
/* ====== Фильтры ===== */

/* Простые фильтры в jQuery */

// $('p:first').css('border', '1px solid red'); // Первый элемент
// $('p:first').css(border)
// $('p:last').css('border', '1px solid red');// Последний элемент
// $('p:last').css(border)
// $('a:eq(2)').css('border', '1px solid red');// Элемент под номером ... (нумерация с 0)
// $('a:eq(2)').css(border)
// $('*:not(h2,p)').css('border', '1px solid red');// Исключает из найденных элементов selector
// $('*:not(h2,p)').css(border)
// $('li:odd').css('border', '1px solid red');// Четные найденные элементы
// $('li:odd').css(border)
// $('li:even').css('border', '1px solid red'); // Нечетные найденные элементы
// $('li:even').css(border)
// $('li:gt(0)').css('border', '1px solid red');// Элементы чей порядковый номер больше n
// $('li:gt(0)').css(border)
// $('li:lt(3)').css('border', '1px solid red');// Элементы чей порядковый номер меньше n
// $('li:lt(3)').css(border)
// $('*:header').css('border', '1px solid red');// Только те элементы, которые являются заголовками
// $('*:header').css(border)
// $('li:animated').css('border', '1px solid red'); // Только те элементы, которые задействованы в анимации
// $('li:animated').css(border)
// $('li:hidden').css('border', '1px solid red'); // Скрытые элементы
// $('li:hidden').css(border)
// $('li:visible').css('border', '1px solid red');// Видимые элементы
// $('li:visible').css(border)
// $('li:lang(ru)').css('border', '1px solid red'); // Фильтрация по языку
// $('li:land(ru)').css(border)
/* Взаимодействия с элементами по атрибутам */

// $('a[download]').css('border', '1px solid red'); // Простой атрибут
// $('a[download]').css('border', '1px solid red');
// $('a[href="http://ya.ru"]').css('border', '1px solid red'); // Полное соответсвие
// $('a[href="http://ya.ru"]').css('border', '1px solid red');
// $('a[href!="http://ya.ru"]').css('border', '1px solid red'); // Полное несоответствие
// $('a[href!="http://ya.ru"]').css('border', '1px solid red');
// $('a[href^="http"]').css('border', '1px solid red'); // Начинается с ...
// $('a[href^="http"]').css('border', '1px solid red');
// $('a[href$=".com"]').css('border', '1px solid red'); // Заканчивается на ...
// $('a[href$=".com"]').css('border', '1px solid red')
// $('a[href*="google"]').css('border', '1px solid red'); // Содержит ...
// $('a[href*="google"]').css('border', '1px solid red');
// $('a[data-target|="main"]').css('border', '1px solid red'); // Имеет префикс - ...
// $('a[data-target|="main"]').css('border', '1px solid red')
// $('a[href][download]').css('border', '1px solid red'); // Имеет одновременно несколько атрибутов
// $('a[href][download]').css('border', '1px solid red');