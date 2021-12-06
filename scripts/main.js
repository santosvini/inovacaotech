var contato = document.getElementById('contato')
  contato.addEventListener('mousenter', entrar)
  contato.style.background = 'white'
    function entrar() {
      contato.innerText = 'Faça seu orçamento com a Inovação Tech'
      contato.innerHTML = ''
        }