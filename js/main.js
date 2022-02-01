
// document.addEventListener("DOMContentLoaded", function(event) { 
//     const modal = document.querySelector('.modal');
//     const closeBtn = document.querySelector('.modal__close');
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//        }
//     modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//        });
//     closeBtn.addEventListener('click', switchModal);
//      });

$(document).ready(function(){
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    modalBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function (){
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true
    })
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
});


