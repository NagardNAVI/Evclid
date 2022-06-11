window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__btn_step').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how__btn_step').forEach(function(tabsBtn){
        tabsBtn.classList.remove('how__btn_color-active')
      })

      event.currentTarget.classList.add('how__btn_color-active')

      document.querySelectorAll('.how__tabs-content').forEach(function (tabContent) {
        tabContent.classList.remove('how__tabs-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how__tabs-content-active')
      })
      
  })
})
