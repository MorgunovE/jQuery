$(function () {
  $.ajax({
    url: 'Hello.aspx',
    type: 'POST',
    async: true,
    timeout: 1000,
    data: $('#myForm').serialize(),
    // JSON.stringify($('myForm').serializeArray()),
    // JSON.stringify({
    //   name: $('#name').val().trim(),
    //   processData: false
    // })
  }).success(function (data) {
    $('#result').html(data);
  })
  $.post('Hello.aspx', 'name=' + $("#name").val(),
    function(data) {
     $('#result').html(data)
    }
    )
  $.get('ServerTime.aspx',
    function (data) {
      $('#result').html(data);
    }
    ).fail(function () {
      $('#result').html('Failed getting response')
  })
  function requestServerTime() {
    $('#result').load('ServerTime.aspx')
  }
  $.getJSON(url, body, callback)
  $.ajax({
    url:'',
    type:'GET',
    timeout: 12000,
    dataType:'text'
  }).done(function(responseText){
    $('#answer').text(responseText)
  }).fail(function() {
    alert('An error has occurred - you may not have been entered')
  })
  $.ajax({
    url: '',
    type:'POST',
    timeout: 12000,
    dataType:'text',
    data: {
      firstName: myForm.fname.value,
      lastName: myForm.lname.value,
    }
  })
})