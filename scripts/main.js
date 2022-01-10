var contato = document.getElementById('contato')
var p = document.querySelector("section#contato")
  
  contato.addEventListener('click', function entrar() {
  contato.style.background = 'var(--cor0)'
  contato.innerText = 'Faça seu orçamento com a Inovação Tech'
})

  contato.addEventListener('mouseout', function sair() {
  contato.style = 'var(--cor0)'
  contato.innerHTML = `
  <section id="contato">
  <h2>Contato</h2>
  <p>Fale Conosco</p>
  <div class="container-media">
    <div class="social-media">
      <a
        href="https://api.whatsapp.com/message/JTUW4GXA2MVFB1"
        target="_blank">
        <img src="./imagens/whatsapp.png" alt="telefone" />
        <p>(11) 92000-0319</p>
      </a>
      <a href="mailto:inovacaotech@outlook.com.br">
        <img src="./imagens/mail.png" alt="e-mail"/><p>inovacaotech@outlook</p></a>
      <a href="https://www.instagram.com/inovacaotech010/" target="_blank">
        <img src="./imagens/instagram.png" alt="instagram"/>
        <p>@inovacaotech010</p></a>
    </div>
  </div>
</section>`
})

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