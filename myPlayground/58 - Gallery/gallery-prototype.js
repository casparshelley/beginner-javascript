/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery Found!');
  }
  this.gallery = gallery;
  // select elements
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.prevButton = this.modal.querySelector('.prev');
  this.nextButton = this.modal.querySelector('.next');

  // bind methods to instance when needed
  // makes this refer to image rather than button
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);

  // Event Listeners
  this.images.forEach((image) => image.addEventListener('click', (e) => this.showImage(e.currentTarget)));

  // loop over each image again
  this.images.forEach((image) => {
    // attach an event listener for each image
    image.addEventListener('keyup', (e) => {
      // when key goes up, check if it was enter
      if (e.key === 'Enter') {
        // if it was show the image
        this.showImage(e.currentTarget);
      }
    });
  });

  this.modal.addEventListener('click', this.handleClickOutside);
}

Gallery.prototype.openModal = function () {
  // check if running
  if (this.modal.matches('.open')) {
    return;
  }
  this.modal.classList.add('open');
  // Event listeners for open modal only
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
};

Gallery.prototype.closeModal = function () {
  this.modal.classList.remove('open');
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
};

Gallery.prototype.handleClickOutside = function (e) {
  // uses bubbling to determine if modal is clicked outside modalInner
  // works because target and currentTarget bubble differently
  if (e.target === e.currentTarget) {
    this.closeModal();
  }
};

Gallery.prototype.handleKeyUp = function (e) {
  if (e.key === 'Escape') return this.closeModal();
  if (e.key === 'ArrowRight') return this.showNextImage();
  if (e.key === 'ArrowLeft') return this.showPrevImage();
};

Gallery.prototype.showNextImage = function () {
  console.log(this);
  this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
};

Gallery.prototype.showPrevImage = function () {
  this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
};

Gallery.prototype.showImage = function (el) {
  if (!el) {
    console.log('No image!');
    return;
  }
  // update this.modal
  this.modal.querySelector('img').src = el.src;
  this.modal.querySelector('h2').textContent = el.title;
  this.modal.querySelector('figure p').textContent = el.dataset.description;
  this.currentImage = el;
  this.openModal();
};

// Use it on the page like a plugin
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);
