const border = { 'border': '1px solid red' }
const block = { 'display': 'block' }
const click = 'Ты кликнул на кнопку'
const el = '<li>Дополнительный элемент</li>'

$( function() {
  let menuLink = $( '.menu-link' )
  let menu = $( 'menu' )
  let close = $( '.close-btn' )
  let navLink = $( 'li a' )
  menuLink.click( function() {
    menu.toggleClass( 'active-menu' )
  } )
  close.click( function() {
    menu.toggleClass( 'active-menu' )
  } )
  navLink.on( 'click', function( event ) {
    event.preventDefault();
    let target = $( this ).attr( 'href' )
    // console.log( target )
    let top = $( target ).offset().top;
    // console.log( top )
    $( 'html,body' ).animate( { scrollTop: top }, 500 )
  } )
} )
/* Делаем собственный слайдер на jQuery */
// $( function() {
//   let slideNow = 1;
//   let slideCount = $( '.sliderwrapper' ).children().length;
//   // console.log(slideCount)
//   let slideTime =2000;
//
//   // setInterval(nextSlide, slideTime);
//
//   function nextSlide() {
//     if( slideNow == slideCount || slideNow <= 0 || slideNow > slideCount ) {
//       $( '.sliderwrapper' ).css( {
//         "transform": "translate(0,0)",
//         "-o-transform": "translate(0,0)",
//         "-webkit-transform": "translate(0,0)",
//       } )
//       slideNow = 1;
//     } else {
//       let transleteWidth = -$( '.viewport' ).width() * ( slideNow );
//       $( '.sliderwrapper' ).css( {
//         "transform": "translate(" + transleteWidth + "px,0)",
//         "-o-transform": "translate(" + transleteWidth + "px,0)",
//         "-webkit-transform": "translate(" + transleteWidth + "px,0)",
//       } )
//       slideNow++;
//     }
//   }
// } )
// $(function() {
//   let slideNow = 1;
//   let slideCount = $('.sliderwprapper').children().length;
//   let slideTime = 5000;
//   let navBtn = $('.slide-nav');
//   let slide = 0;
//
//   navBtn.click(function() {
//     navBtn = $(this).index();
//     $('.active').removeClass('active');
//     $(this).toggleClass('active');
//     if (navBtn != slide) {
//       $(`.slide`).addClass('slide-none');
//       $(`.slide:eq(${navBtn})`).removeClass('slide-none');
//       slide=navBtn;
//       // slideNow++;
//       // var translateWidth = -$('.viewport').width()	* (navBtn);
//       // $('.sliderwprapper').css({
//       //   'transform': 'translate('+translateWidth+'px,0)',
//       //   '-o-transform': 'translate('+translateWidth+'px,0)',
//       //   '-webkit-transform': 'translate('+translateWidth+'px,0)'
//       // });
//       slideNow = navBtn + 1;
//     }
//   });
//
//   // setInterval(nextSlide, slideTime);
//
//   $('.btn-next').click(nextSlide);
//   $('.btn-prev').click(prevSlide);
//
//
//
//   function nextSlide() {
//     if (slideNow == slideCount || slideNow <=0 || slideNow > slideCount) {
//       // $('.sliderwprapper').css({
//       //   'transform': 'translate(0,0)',
//       //   '-o-transform': 'translate(0,0)',
//       //   '-webkit-transform': 'translate(0,0)'
//       // });
//       $(`.slide`).addClass('slide-none');
//       slide=0;
//       navBtn = slide;
//       $('.active').removeClass('active');
//       $(`.slide-nav:eq(${slide})`).toggleClass('active');
//       $(`.slide:eq(${slide})`).removeClass('slide-none');
//       slideNow = 1;
//     } else {
//       // var translateWidth = -$('.viewport').width()	* (slideNow);
//       // $('.sliderwprapper').css({
//       //   'transform': 'translate('+translateWidth+'px,0)',
//       //   '-o-transform': 'translate('+translateWidth+'px,0)',
//       //   '-webkit-transform': 'translate('+translateWidth+'px,0)'
//       // });
//       $(`.slide:eq(${slide})`).addClass('slide-none');
//       $(`.slide:eq(${slide+1})`).removeClass('slide-none');
//       slide++;
//       navBtn = slide;
//       $('.active').removeClass('active');
//       $(`.slide-nav:eq(${slide})`).toggleClass('active');
//       slideNow++;
//     }
//   }
//   function prevSlide() {
//     if (slide==0 || slideNow == 1 || slideNow <=0 || slideNow > slideCount) {
//       // var translateWidth = -$('.viewport').width() * (slideCount - 1);
//       // $('.sliderwprapper').css({
//       //   'transform': 'translate('+translateWidth+'px,0)',
//       //   '-o-transform': 'translate('+translateWidth+'px,0)',
//       //   '-webkit-transform': 'translate('+translateWidth+'px,0)'
//       // });
//       $(`.slide`).addClass('slide-none');
//       slide=slideCount-1;
//       navBtn = slide;
//       $('.active').removeClass('active');
//       $(`.slide-nav:eq(${slide})`).toggleClass('active');
//       $(`.slide:eq(${slide})`).removeClass('slide-none');
//       slideNow = slideCount;
//     } else {
//       // var translateWidth = -$('.viewport').width()	* (slideNow - 2);
//       // $('.sliderwprapper').css({
//       //   'transform': 'translate('+translateWidth+'px,0)',
//       //   '-o-transform': 'translate('+translateWidth+'px,0)',
//       //   '-webkit-transform': 'translate('+translateWidth+'px,0)'
//       // });
//
//       $(`.slide:eq(${slide})`).addClass('slide-none');
//       slide--;
//       navBtn = slide;
//       $('.active').removeClass('active');
//       $(`.slide-nav:eq(${slide})`).toggleClass('active');
//       $(`.slide:eq(${slide})`).removeClass('slide-none');
//       slideNow--;
//     }
//   }
// });

/* Табы */
// $(function(){
//   let tab = $('a[data-toggle="tab"]');
//   tab.on('click', function(){
//     event.preventDefault();
//     $('.active').removeClass('active');
//     $(this).parent().toggleClass('active');
//     let target = $(this).attr('href')
//     $(target).toggleClass('active');
//   })
// })
// $(function() {
//   var tab = $('a[data-toggle="tab"]');
//
//   tab.on('click', function() {
//     event.preventDefault();
//     $('.active').removeClass('active');
//     $(this).parent().toggleClass('active');
//     var target = $(this).attr('href');
//     $(target).toggleClass('active');
//   });
// });

// /* Всё о всплывающих (модальных) окнах */
// $(document).ready(function() {
//   let modal = $('.popup'),
//     overlay = $('.overlay'),
//     link = $('button[data-popup = "true"]'),
//     close = $('.close-btn'),
//     fruitName = $('.fruit-name')
//   link.on('click', function(){
//     overlay.show()
//     // modal.show()
//     modal.toggleClass('popup_active')
//     fruitName.text($(this).attr('data-fruit'))
//     // console.log($(this).attr('data-fruit'))
//   })
//   close.click(function(){
//     overlay.hide()
//     // modal.hide()
//     modal.toggleClass('popup_active')
//   })
// })
/*$(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('button[data-popup="true"]'),
 					close = $('.close-btn');
 	link.on('click', function () {
 		overlay.show();
 		modal.show();
 	});
 	close.click(function() {
 		overlay.hide();
 		modal.hide();
 	});
 });	*/ // Самый простой вариант всплывающего окна


/*$(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('button[data-popup="true"]'),
 					close = $('.close-btn');

 	close.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 	});
 	link.on('click', function () {
 		console.log(modal);
 		overlay.show();
 		modal.toggleClass('popup_active');
 	});
 });*/	// Красивое появляение окна


// $(document).ready(function() {
//   var modal = $('.popup'),
//     overlay = $('.overlay'),
//     link = $('button[data-popup="true"]'),
//     close = $('.close-btn'),
//     fruitName = $('.fruit-name');
//
//   close.click(function() {
//     modal.toggleClass('popup_active');
//     overlay.hide();
//   });
//   link.on('click', function () {
//     fruitName.text($(this).attr('data-fruit'));
//     overlay.show();
//     modal.toggleClass('popup_active');
//   });
// });// Много кнопок - одно окно

// Как всегда, проверим готовность документа
// $(function() {
//   // Отлавливаем события "Нажатие на клавишу"
//   $(this).keydown(function(event) {
//     // console.log(this)
//     console.log(event.which)
//     // Создаем переменную, в которую помещаем div с подходящим data-key
//     // var key = $(this).find('.key[data-key='+event.which+']');
//     let key = $(this).find('.key[data-key='+event.which+']');
//     // Находим на странице тег audio с нужным data-key и помещаем также в переменную для удобства
//     // var audio = $(this).find('audio[data-key='+event.which+']')[0];
//     let audio = $(this).find('audio[data-key='+event.which+']')[0];
//     // Присваиваем активный класс к клавише, чтобы подсветить ее
//     // key.toggleClass('playing');
//     key.toggleClass('playing');
//     // проверяем существует ли audio тег с таким data-key
//     // if (!audio) return;
//     if(!audio) return;
//     // Воспроизводим звук
//     // audio.play();
//     audio.play();
//     // Сбрасываем таймер звуковой дорожки снова на 0
//     // audio.currentTime = 0;
//     audio.currentTime = 0;
//   })
// Отслеживаем событие, когда пользователь отпускает кнопку
//   $(this).keyup(function(event) {
//     // снова создаем переменную с нужным data-key
//     var key = $(this).find('.key[data-key='+event.which+']');
//     // Убираем класс, который подсвечивает кнопку
//     key.toggleClass('playing');
//   });
// });

/* ====== Базовые события ===== */

// $('ul li').click(function(event) {
// 	console.log('Ты нажал на элемент');
// 	$('ul').append('<li>Дополнительный элемент</li>');
// });	// click()
// $('ul li').click(function(event){
//   console.log(click)
//   $('ul').append(el)
// })
// function addAndStop(e) {
//   $('ul').append('<li>Дополнительный элемент</li>');
//   $('ul').off('click');
// }
// function addAndStop(e){
//   $('ul').append(el)
//   $('ul').off('click')
// }
// $('ul').on('click', 'li', addAndStop);
// $('ul').on('click', 'li', addAndStop)
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