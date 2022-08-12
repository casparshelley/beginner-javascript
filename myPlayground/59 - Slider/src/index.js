function Slider(slider) {
  // checks if slider is really an element not a value or variable
  if (!(slider instanceof Element)) {
    throw new Error('Thats not an element');
  }

  // create slider variables
  let prev;
  let current;
  let next;

  // select elements needeed
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    // console.log({ current, prev, next });
  }

  function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }

  function move(direction) {
    // first strip all the classes
    const classesToRemove = ['prev', 'current', 'next'];
    [prev, current, next].forEach((el) => el.classList.remove(...classesToRemove));
    // prev.classList.remove(...classesToRemove);
    // current.classList.remove(...classesToRemove);
    // next.classList.remove(...classesToRemove);
    if (direction === 'back') {
      // make array of new values using destructuring
      [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
    } else {
      [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
    }
    applyClasses();
  }
  // when created run this constructor function
  startSlider();
  applyClasses();

  // Event listeners
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
