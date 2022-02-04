/*
document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector ('.modal__close')
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }
    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
    
    closeBtn.addEventListener('click', switchModal)

    document.addEventListener('click', (e) => {
        if (e.target.classList === modal.classList) {
            modal.classList.toggle('modal--visible');
        };
    });
    
    document.addEventListener('keydown', (e) => {
        if(e.key == 'Escape') {
            if (modal.classList.contains('modal--visible')) {
                modal.classList.toggle('modal--visible');
            };
        };
    });
})
*/

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    var modalDialog = $('.modal__dialog')

    $(document).mouseup( function(e) {
        if(!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0 ) {
            modal.removeClass('modal--visible')
        };
    });

    $(document).on('keydown', function(e) {
        if (e.keyCode == 27)
            modal.removeClass('modal--visible');
        });

        var btn = $('#button');

        $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });
        
        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
        });

        // var mySwiper = new Swiper ('.swiper-container', {
        //     loop: true
        // })

        const swiper = new Swiper('.swiper', {
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        var next = $('.swiper-button-next');
        var prev = $('.swiper-button-prev');
        var bullets = $('.swiper-pagination');

        next.css('left', prev.width() + 10 + bullets.width() + 10)
        bullets.css('left', prev.width() + 10)

        var nextTwo = $('.swiper-button-next_2');
        var bulletsTwo = $('.swiper-pagination_2');

        
        nextTwo.css('left', prev.width() + 10 + bulletsTwo.width() + 10)
        bulletsTwo.css('left', prev.width() + 10)

        new WOW().init();
});
