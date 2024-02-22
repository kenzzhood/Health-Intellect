const fullNameInput = document.getElementById('logname');
const emailInput = document.getElementById('logemail');
const passwordInput = document.getElementById('logpass');
const submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', validateForm);

function validateForm(event) {
    event.preventDefault();
    resetErrors();

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (fullName === '') {
        displayError('name-error', 'Please enter your full name.');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('email-error', 'Please enter a valid email address.');
    }

    if (password.length < 6) {
        displayError('password-error', 'Password must be at least 6 characters long.');
    }

    // If no errors, you can submit the form
    // else {
    //     document.querySelector('form').submit();
    // }
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
}

function resetErrors() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.innerText = '';
    });
}