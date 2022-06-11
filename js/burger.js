window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function(burger) {
    document.querySelector('.menu-burger').classList.toggle('menu-burger_active')
  })
  
  document.querySelector('.header__burger').addEventListener('click', function(event) {
    event.target.classList.toggle('header__burger_active')
  })
})