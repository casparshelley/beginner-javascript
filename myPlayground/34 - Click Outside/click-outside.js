const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // grab the image source
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  // populate the modal
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="${name}" />
  <p>${desc}</p>
  `;
  // show the modal
  modalOuter.classList.add('open');
}

// make the buttons work
cardButtons.forEach((button) => button.addEventListener('click', handleCardButtonClick));

// close the modal
function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (event) => {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

// function handleKey()

window.addEventListener('keydown', (event) => {
  // console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
