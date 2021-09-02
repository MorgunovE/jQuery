$(function () {
  // const lis = $('li');
  // const myList = lis.filter('.myList')
  // const notList = lis.not(':has(strong.x)')
  // const inSpan = lis.has('span')
  // if($('li:first').is(':visible')){
  //   console.log(inSpan)
  // $('li').first().siblings()
  // $('li').parent('ul.myList').removeClass('myList')
  // $('li').parents().removeClass('myList')
  // $('li').closest('div').removeClass('myList')
  // $('ul').add('div')
  // $('li').eq(2).siblings().css('color', 'red').andSelf().css('background-color', 'red')
  // }
  // $('ul.myList')
  //   .children('li')
  //   .eq(1)
  //   .next() // prev()
  //   .css('color', 'red')
  //   .text('second item')
  // console.log(lis)
  // $('li').html(function(idx,txt){
  //   return idx+'-'+'txt'+'!!!'
  // })
  // $('form').attr('method', 'get')
  // $('form').attr('action', function(idx, val) {
  //   return val+'?param=true'
  // })
  // $('input[type="text"]').val('Hello')
  // $('select')
  // $('input[type="text"]').each(function(idx, el){
  //   console.log(idx, $(el).val())
  // })
  // $('table tbody tr:odd').css('background-color', 'white')
  // let txt = $('table#courses td:contains("AJAX")')
  //   .eq(1).text();
  // txt = txt.slice(0, text.indexOf(" ("))
  // let p = $('div#content div#news p').not(':has(span.hidden)');
  // p.children('span').text(txt);
  // $('button').on('click', function() {
  //   $(this).text('New text');
  // })
  // function toggle(obj){
  //   obj
  //     .siblings('button')
  //     .removeAttr('disabled')
  //     .end()
  //     .attr('disabled')
  // }
  // $('#hide').on('click', function() {
  //   $('#box').hide()
  //   toggle($(this))
  //   // $(this).attr('disabled', 'disabled')
  //   // $(this).siblings().removeAttr('disabled')
  // })
  // $('#show').on('click', function() {
  //   $('box').show()
  //   toggle($(this))
  //   // $(this).attr('disabled', 'disabled')
  //   // $(this).siblings().removeAttr('disabled')
  // })
  // $('#toggle').on('click', function() {
  //   if($("#box").is(':visible')) {
  //     $('box').hide()
  //     $(this).text('hide')
  //   }else {
  //     $('#box').show()
  //     $(this).text('Show1')
  //   }
  // })
  // $('#toggle').on('click', function() {
  //   $('#box').toggle();
  // })
  // $('#toggle').on('click.foo', function() {
  //   // $('#box').toggle();
  // })
  // $('#toggle').on('click.bar', function() {
  //   // $('#box').toggle();
  // })
  // $('#box').on('click', function() {
  //   $('#toggle').trigger('click')
  // })
  // $('#box').on('mouseenter mouseleave ', function() {
  //   $('#toggle').trigger('click')
  // })
  // $('#box').on('click', function() {
  //   $('#toggle').off('click')
  // })
  //
  // $('#box').on('click.foo', function() {
  //   $('#toggle').off('click')
  // })
  // $('#box').on('click', {x:10, y:20},function(e) {
  //   // $('#toggle').off('click')
  //   console.log(e.data.x, e.data.y)
  //   e.preventDefault();
  //   e.stopPropagation();
  // });
  // $('*').add([document, window]).on('click', function(e){
  //   e.stopPropagation();
  // })
  // $('div').eq(3).find('p')
  // $(window).on('resize scroll', function() {
  //   console.log('here')
  // })
  // $(document).on('click', function(e){
  //   console.log('type', e.type)
  //   console.log('which', e.which)
  //   console.log('target', e.target)
  //   console.log('currentTarget', e.currentTarget)
  //   console.log('x:y', e.pageX+':'+e.pageY)
  // })
  // $('div#news span.hidden').hide()
  // $('div#news p').on('click', function () {
  //   $(this).children('span').toggle()
  // })
  // let tr = $('table#courses tbody tr')
  // tr.on('mouseenter', function () {
  //   $(this).css('background-color', 'yellow')
  //   $(this).children().eq(3).css('font-weight', '')
  // })
  // tr.on('mouseenter mouseleave', function (e) {
  //   changeTableColor(e.type, $(this))
  // })
  //
  // function changeTableColor(eType, obj) {
  //   let bg = '', fw = ''
  //   if (eType === 'mouseenter') {
  //     bg = 'yellow'
  //     fw = 'bold'
  //   }
  //   obj.css('background-color', bg)
  //     .children().eq(3).css('font-weight', fw)
  // }
  // $('article').append('Hello')
  // $('article').prepend('Hello')
  // $('h1').after('World')
  // $('h1').before('World')
  // $('p').first().before('World')
  //
  // $('article').append('<h2>Hi</h2>')
  //
  // $('<h2></h2>', {
  //   text: 'Hello',
  //   class: 'myClass'
  // }).prependTo('article')
  // $('p').eq(1).after(function (){
  //   return $(this).prev()
  // })
  // $('ul li').on('click', function() {
  //   console.log($(this).text())
  // })
  // let x = $('ul li').first().remove()
  // let x = $('ul li').first().detach()
  // x.appendTo('ul')
  // $('ul').on('click', 'li', function() {
  //   console.log($(this).text())
  // })
  // $('<li>last</li>').appendTo('ul')
  // 'str'.indexOf()
  // [].indexOf()
  let tr = $('table tbody tr')
  let complexes = tr.map(function (i, obj) {
    return $(obj).children().eq(3).text()
    function unique(arr) {
      let tmp = []
      for(let i = 0; i<arr.length; i++) {
        if(tmp.indexOf(arr[i]) === -1)
          tmp.push(arr[i])
      }
      return tmp
    }
    complexes = unique(complexes)
    $('span#complex').text(
      $.map(complexes, function(obj, i) {
        return complexes[i]
      }).join(', ')
    )
  })
})