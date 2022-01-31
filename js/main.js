
document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal__close');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const switchModal = () => {
    modal.classList.toggle('modal--visible');
       }
    modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
       });
    closeBtn.addEventListener('click', switchModal);
     });
