/* eslint-disable no-console */
// Utility Function
function wait(ms = 0) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove popup
  popup.remove();
  // eslint-disable-next-line no-param-reassign
  popup = null;
}

function ask(options) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    // Create popup with the fields
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label> 
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>    
    `
    );
    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'Button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      // todo listen for click
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // Listen for submit event
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        resolve(e.target.input.value);
        destroyPopup(popup);
      },
      { once: true }
    );

    // On submit, resolve input box data

    // Insert popup
    document.body.appendChild(popup);
    // small timeout to push this to end of event loop
    await wait(50);
    popup.classList.add('open');
  });
}

// select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = button.hasAttribute('data-cancel');
  // const cancel = 'cancel' in button.dataset;
  const answer = await ask({ title: button.dataset.question, cancel });
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What be thine name?' },
  { title: 'What be thine age?', cancel: true },
  { title: 'What be thine hounds name?' },
];

// Utility Function
async function asyncMap(array, callback) {
  // make an array to store results
  const results = [];
  // loop over array
  for (const item of array) {
    results.push(await callback(item));
  }
  // when loop is complete return results.
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}
go();

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
