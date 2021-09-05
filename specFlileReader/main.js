function readTextFile() {
  let f = document.getElementById('textFile')
  if(f.files.length !== 0) {
    let reader = new FileReader();
    reader.onload = function(e) {
      let div = document.getElementById('result')
      div.innerText = e.target.result
    }
    reader.readAsText(f.files[0])
  }
}
function readImageFile() {
  let f = document.getElementById('imageFile')
  if(f.files.length !== 0) {
    let reader = new FileReader();
    reader.onprogress = function(e) {
      // let s =''
      // for( let p in e) {
      //   s += p+ ':' + e[p] +'\n'
      // }
      // alert(s)
      document.getElementById('resultProgress').innerHTML += Math.round((e.loaded / e.total) * 100)
    }
    reader.onload = function(e) {
      let img = document.getElementById('myImage')
      img.src = e.target.result
    }
    reader.readAsDataURL(f.files[0])
  }
}