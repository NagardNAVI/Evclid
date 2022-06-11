window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.search-form__view-btn').addEventListener('click', function() {
    document.querySelector('.search-form').classList.add('search-form--active'),

    document.querySelector('.menu').classList.add('menu--active')

    document.querySelector('.search-form__view-btn').classList.add('search-form___view-btn--active')
  })

});