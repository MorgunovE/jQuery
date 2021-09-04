(function () {
  let user = [{
    name: 'Jon Smith',
    email: 'j@test.com',
  }, {
    name: 'Mike Doe',
    email: 'm@test.com',
  },]
  let tpl = Handlebars.compile(document.getElementById('myTpl').innerHTML)
  document.getElementById('users').innerHTML = tpl(user)
  // console.log(tpl(user))
})()