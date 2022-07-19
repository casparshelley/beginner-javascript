const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector({ fastMode: true });
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');

// console.log(optionsInputs);

const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionsInputs.forEach((input) => input.addEventListener('input', handleOption));

// console.log(video, canvas, faceCanvas, faceDetector);

// function will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
    // video: { width: 1920, height: 1080 },
  });
  video.srcObject = stream;
  await video.play();
  // size the canvases to be the same size as the video
  // console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // console.log(faces.length);
  // ask the browser for the next animation frame and run detect
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // console.log(face);
  // draw a small face
  faceCtx.drawImage(
    // 5 args source
    video, // origin of source image
    face.x, // where do we start source pull
    face.y,
    face.width,
    face.height,
    // 4 args draw
    face.x, // where do we start sdrawing
    face.y,
    options.SIZE, // size of small face
    options.SIZE
  );
  // take face out and draw it back full size
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, // source
    face.x, // where do we start source pull
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing args
    face.x - (width - face.width) / options.SCALE,
    face.y - (height - face.height) / options.SCALE,
    width,
    height
  );
}

populateVideo().then(detect);
