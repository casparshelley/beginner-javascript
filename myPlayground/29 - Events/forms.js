const cdog = document.querySelector('.cdog');

cdog.addEventListener('click', (event) => {
        const shouldChangePage = confirm('Are you sure?');
        if (!shouldChangePage) {
                event.preventDefault();
        }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', (event) => {
        // console.log(event);
        const name = event.currentTarget.name.value;
        // console.dir(event.currentTarget.name.value);
        // console.dir(event.currentTarget.email.value);
        // console.dir(event.currentTarget.agree.checked);
        if (name.includes('chad')) {
                alert('No chads');
                event.preventDefault();
        }
});

function logEvent(event) {
        console.log(event.type);
        console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
