/* eslint-disable no-console */
// Select the elements on the page
// canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 40;

// Set up the canvas for drawing
const { width, height } = canvas; // destructured syntax where variable names match property names

// create random x and y
let y = Math.floor(height * Math.random());
let x = Math.floor(width * Math.random());

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;

ctx.strokeStyle = `hsl(${hue}, 100%, 45%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
// again using object destructuring (curly brackets) to reduce code redundancy
function draw({ key }) {
  // make a rainbow colour
  // hue += 1; // this makes a progressive rainbow colour
  hue = Math.random() * 255; // this makes a random rainbow colour
  ctx.strokeStyle = `hsl(${hue}, 100%, 45%)`;

  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// Clear/shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
      console.log('done shakin');
    },
    { once: true }
  );
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
