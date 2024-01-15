(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach(element => {
    element.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  //* Закривання по кліку на бекдроп

  refs.modal.addEventListener('click', removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add('is-hidden');
    }
  }
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-menu');
let menuItem = document.querySelectorAll('.close-menu');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('is-open');
  menuItem.addEventListener('click', function () {
    menu.classList.toggle('is-open');
  });
});
