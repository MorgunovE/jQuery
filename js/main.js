// jquery();
// $(".logo");
// $("a");
// $("#recive");
// $("nav menu li");
// $(".icons > div");
// $(".icons img + h4");
// $("img[height=150]");
// $("img[src^=img/]");
// $("img[src$=.png]");
// $("a[href*=#]");
// $("menu li:even");
// $("menu li:odd");
// $("img:not(.logo img)");
// $("li:has(a)");
// $("p:contains(client)");
// $("li:first");
// $("li:last");
// $("div:hidden");
// $("div:visibility");

// $(document).ready(function () {});
$(function () {
  // let tagP = $('.mainText p').text();
  // tagP = $('.mainText p').text('New text');
  // $('.mainText p').hide();
  // $('.mainText p').hide(3000);
  // $('.mainText p').hide(3000, function(){
  //
  // });
  // $('.mainText p').show(5000);
  // $('.mainText p').show(5000,handler());
  // $('.mainText p').hide(3000).show(5000);
  // let tagP = $('.mainText p');
  // tagP.hide(3000).show(5000);
  // tagP.hide(3000).text('New text').show(5000);
  // console.log(tagP);
  // $(".icons > div").hide(3000);
  // let w = $('.btn').width();
  // let w = $('.mainText').width(350);
  // alert(w);
  // let h = $('.btn').height();
  // let h = $('.mainText').height(250);
  // alert(h);
  // function WidthAndHeight(element) {
  //   let className = "." + element;
  //   let w = $(className).width();
  //   let h = $(className).height();
  //   $(".mainText").text("Width:" + w + "; Height:" + h);
  // }
  // WidthAndHeight("recive");
  // alert($(".mainText").html());
  // alert($(".mainText").html('<b>New Title</b>'));
  // $(".mainText").fadeOut(3000).fadeIn(5000);
  // function elementOut(element, time) {
  //   if (time > 5000 || time < 1000 || isNaN(time)) {
  //     return false;
  //   } else {
  //     let className = "." + element;
  //     $(className).fadeOut(time);
  //   }
  // }
  // elementOut("mainText", 3000);
  // $(".mainText").fadeTo(4000, 0.1).fadeTo(4000, 1);
  // function MyFunc() {}
  // $(".mainText").fadeTo(4000, 0.1, MyFunc()).fadeTo(4000, 1);
  // $(".mainText").slideUp(3000).slideDown(5000);
  // let src = $(".logo img").attr("src");
  // let src = $(".logo img").attr("src", 'img/icon1.png');
  // let src = $(".logo img").attr("title", 'Hint');
  // let src = $(".logo img").removeAttr("src");
  // function changeAttr(element, newAttr, newValue) {
  //   let className = "." + element;
  //   $(className).attr(newAttr, newValue);
  // }
  // changeAttr("logo", "title", "New text");
  // alert(src);
  // $("nav menu").addClass("border").removeClass("border");
  // alert($("nav menu").css("font-size"));
  // $("nav menu li a").css("font-size", "50px").css("color", "red");
  // $("nav menu li a").css({
  //   color: "red",
  //   "font-size": "50px",
  // });
  // $("nav menu li a").animate(
  //   {
  //     "font-size": "50px",
  //     padding: "10px",
  //   },
  //   3000,
  //   function () {
  //     alert("finish");
  //   }
  // );
  // $(".mainText").before("<span class='newClass'>New block</span>");
  // $(".mainText").after("<span>New block</span>");
  // $(".mainText").append("<span>New block</span>");
  // $(".mainText").prepend("<span>New block</span>");
  // $(".icons img").each(function () {
  //   if ($(this).attr("src") == "img/icon3.png") {
  //     $(this).fadeOut(3000).css({});
  //   }
  // });
  // alert($("div").length);
  // alert($("li").length);
  // for (let i = 0; i < $("li").length; i++) {
  //   alert($("li").length);
  // }
  // let mainText = $(".mainText").clone();
  // $("body").append(mainText);
  // let mainText = $(".mainText").remove();
  // $("nav").before(mainText);
  // $("img, a").css("background", "#222");
  // $("img[alt]").css("background", "#222");
  // $(".logo").mouseover(function () {
  //   alert("Event mouseover");
  // });
  // $(".logo").mouseout(function () {
  //   alert("Event mouseout");
  // });
  // $(".logo").click(function () {
  //   alert("Event click");
  // });
  // $(".logo").mousemove(function () {
  //   alert("Event mousemove");
  // });
  // $(".logo").mouseup(function () {
  //   alert("Event mouseup");
  // });
  // $(window).scroll(function () {
  //   alert("scroll");
  // });
  // $(".arrowDown").click(function () {
  //   let clone = $(this).clone();
  //   $(this).after(clone);
  // });
  // let link = $("menu li a");
  // link.mouseover(function () {
  //   $(this).addClass("border");
  // });
  // link.mouseout(function () {
  //   $(this).removeClass("border");
  // });
  // link.hover(
  //   function () {
  //     $(this).addClass("border");
  //   },
  //   function () {
  //     $(this).removeClass("border");
  //   }
  // );
  // $(".mainText").click(function (e) {
  //   // alert(e.screenX + " " + e.screenY);
  //   // alert(e.pageX + " " + e.pageY);
  //   // alert(e.altKey);
  //   // alert(e.ctrlKey);
  //   // alert(e.shiftKey);
  //   alert(e.target);
  // });
  // $(".btn, .arrowDown").click(function (e) {
  //   // e.preventDefault();
  //   let answer = confirm("Send data?");
  //   if (!answer) {
  //     e.preventDefault();
  //   }
  // return false;
  // });
  // $(".small a").click(function (e) {
  //   if ($(".big img").attr("src") !== $(this).attr("href")) {
  //     $(".big img").hide().attr("src", $(this).attr("href")).fadeIn(1000);
  //   }
  //   e.preventDefault();
  // });
  // $(".button").click(function () {
  //   $(".gallery").slideToggle(500);
  //   if ($(".button").text() == "-") {
  //     $(".button").text("+");
  //   } else {
  //     $(".button").text("-");
  //   }
  // });
  // $(".small a img").click(function () {
  //   $(".small a img").fadeTo(500, 1).css({
  //     border: "none",
  //   });
  //   $(this).fadeTo(500, 0.6).css({
  //     border: "1px dotted red",
  //   });
  // });
  // $(".form1 :checkbox:checked").fadeOut(500);
  // $(".form1 :radio:checked").fadeOut(500);
  // $(".form1 :selected").fadeOut(500);
  // $(":submit").click(function () {
  //   // let value = $("textarea").val();
  //   // let value = $("input.text1").val();
  //   // let value = $("#select1 :selected").val();
  //   let value = $(":checkbox:checked").each(function () {
  //     let value = $(this).val();
  //     alert(value);
  //   });
  //   // alert(value);
  // });
  // $(".form1").submit(function (e) {
  //   if ($(".text1").val() == "") {
  //     e.preventDefault();
  //     alert("Type the input");
  //   }
  // });
  // $(".text1").focus(function () {
  //   // $(this).css({
  //   //   border: "2px double red",
  //   //   background: "green",
  //   // });
  //   $(this).addClass("border");
  // });
  // $(".text1").blur(function () {
  //   $(this).removeClass("border");
  // });
  // $("#select1").change(function () {
  //   let v = $("#select1 :selected").val();
  // if (v == 1) {
  //   $("#select2").html(
  //     "<option value='1'>#1</option><option value='2'>#2</option>"
  //   );
  // } else if (v == 2) {
  //   $("#select2").html(
  //     "<option value='1'>#1</option><option value='2'>#2</option><option value='3'>#3</option>"
  //   );
  // } else if (v == 3) {
  //   $("#select2").html(
  //     "<option value='1'>#1</option><option value='2'>#2</option><option value='3'>#3</option><option value='4'>#4</option>"
  //   );
  // } else {
  //   $("#select2").html("<option value='1'>#1</option>");
  // }
  //   switch (v) {
  //     case "1":
  //       $("#select2").html(
  //         "<option value='1'>#1</option><option value='2'>#2</option>"
  //       );
  //       break;
  //     case "2":
  //       $("#select2").html(
  //         "<option value='1'>#1</option><option value='2'>#2</option><option value='3'>#3</option>"
  //       );
  //       break;
  //     case "3":
  //       $("#select2").html(
  //         "<option value='1'>#1</option><option value='2'>#2</option><option value='3'>#3</option><option value='4'>#4</option>"
  //       );
  //       break;
  //     case "4":
  //       $("#select2").html("<option value='1'>#1</option>");
  //       break;
  //   }
  // });
  $(":submit").click(function (e) {
    $(".text2").attr("disabled", "disabled");
    e.preventDefault();
  });
  $(":reset").click(function (e) {
    $(".text2").removeAttr("disabled");
    e.preventDefault();
  });
});
