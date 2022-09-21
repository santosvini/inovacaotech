function change() {
  const btn = document.querySelector(".btn")
  const body = document.querySelector("body")
  const isDark = body.classList.contains('dark')

  if(isDark) {
    body.classList.toggle('light')
    body.classList.replace('dark', 'light')
    btn.innerText = '🌙'
   } else { 
    body.classList.toggle('dark')
    body.classList.replace('light', 'dark')
    btn.innerText = '🌞'
   }
}

function toTop() {
  const topo = document.querySelector('.scrollTop')

  window.addEventListener('scroll', () => {
    if (window.pageYOffset < 400) {
      topo.classList.add('ativo')
    } else {
      topo.classList.remove('ativo')
    }
  })
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
}

function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollSection)
  })
}
scrollSuave()