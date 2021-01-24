'use strict'

document.addEventListener('DOMContentLoaded', e => {
   function testWebP(callback) {
   let webP = new Image()
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
   }
   webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp')
   } else {
      document.querySelector('body').classList.add('no-webp')
   }
})

   let iconMenu = document.querySelector('.icon-menu')
let body = document.querySelector('body')
let menuBody = document.querySelector('.menu__body')
if (iconMenu) {
   iconMenu.addEventListener('click', function () {
      iconMenu.classList.toggle('active')
      body.classList.toggle('lock')
      menuBody.classList.toggle('active')
   })
}

/*
let iconMenu = document.querySelector('.icon-menu')
let menuButtons = document.querySelectorAll('._menu-btn')
let body = document.querySelector('body')
let menuBody = document.querySelector('.menu__body')
if (menuButtons.length > 0) {
   menuButtons.forEach(menuBtn => {
      menuBtn.addEventListener('click', function () {
         iconMenu.classList.toggle('active')
         body.classList.toggle('lock')
         menuBody.classList.toggle('active')
      })
   })
}
*/

   let btnsSearch = document.querySelectorAll('._sl')
let searchBody = document.querySelector('.search__body')
let searchOverlay = document.querySelector('.search__overlay')
if (btnsSearch.length > 0) {
   btnsSearch.forEach(btn => {
      btn.addEventListener('click', () => {
         body.classList.toggle('lock')
         searchBody.classList.toggle('active')
         searchOverlay.classList.toggle('active')
      })
   })
}

   window.addEventListener('scroll', () => {
   let header = document.querySelector('.header')
   if (header) {
      if (window.scrollY > 50) {
         header.classList.add('scrolled')
      } else {
         header.classList.remove('scrolled')
      }
   }
})

   $('.goto').click(function () {
   var el = $(this).attr('href').replace('#', '')
   var offset = 0
   $('body,html').animate(
      { scrollTop: $('.' + el).offset().top + offset - $('header').height() },
      700,
      function () {},
   )

   if ($('.menu__body').hasClass('active')) {
      $('.menu__body,.icon-menu').removeClass('active')
      $('body').removeClass('lock')
   }
   return false
})

})
