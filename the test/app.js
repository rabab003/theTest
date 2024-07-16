function validateNumberInput() {
    const numberInput = document.getElementById('numberInput');
    const numberError = document.getElementById('numberError');
    numberError.textContent = '';
    numberInput.classList.remove('error-input');
    
    if (numberInput.value.length < 11) {
        numberError.textContent = 'Error: Number must be more than 11 digits.';
        numberInput.classList.add('error-input');
    }
}

function validatePasswordInput() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordError = document.getElementById('passwordError');
    passwordError.textContent = '';
    passwordInput.classList.remove('error-input');
    
    if (passwordInput.value === '') {
        passwordError.textContent = 'Error: Wrong password.';
        passwordInput.classList.add('error-input');
    }
}

document.getElementById('numberInput').addEventListener('blur', validateNumberInput);
document.getElementById('passwordInput').addEventListener('blur', validatePasswordInput);

// Add submit button click event listener for additional validation
document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault();
    validateNumberInput();
    validatePasswordInput();
});
