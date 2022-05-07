const scrollContainer = document.querySelector('.card__container');

//scroll pelo wheel do mouse
scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

//scroll pelos botoes
document.querySelector('#btn-left').addEventListener('click', () => {
  scrollContainer.scrollLeft -= 300;
});

document.querySelector('#btn-right').addEventListener('click', () => {
  scrollContainer.scrollLeft += 300;
});
