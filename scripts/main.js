/* var contato = document.getElementById('contato')
  
  contato.addEventListener('click', entrar)
  contato.style = ''
    function entrar() {
    contato.innerText = 'Faça seu orçamento com a Inovação Tech'
    }

var btn = document.querySelector("#topo");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
}); */

const change = document.querySelector('.btn')

change.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme')

  var className = document.body.className;
  if (className == 'light-theme') {
    this.textContent = 'Dark';
  } 
  else {
    this.textContent = 'Light';
  }

})