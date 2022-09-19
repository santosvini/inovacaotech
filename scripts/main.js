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