const form = document.getElementById('form');
const passwordElement = document.getElementById('password');
const confirmPassElement = document.getElementById('confirmPassword');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // If invalid, style the message for an error
    if(!isValid) {
        message.textContent = 'Please fill out all the fields';
        message.style.color = 'red';
        return;
    }
    // Check if both given passwords match
    if(passwordElement.value === confirmPassElement.value) {
        passwordsMatch = true;
        passwordElement.style.borderColor = 'green';
        confirmPassElement.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Please make sure both passwords match';
        message.style.color = 'red';
        passwordElement.style.borderColor = 'red';
        confirmPassElement.style.borderColor = 'red';
        return;
    }
    // If all fields are valid and both passwords match, give success message
    if (isValid && passwordsMatch) {
        message.textContent = 'Registration Succesful';
        message.style.color = 'green';
    } 
}

function saveFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Action to perform on data...
    console.log(user);
}

function processFormData(e) {
    // Prevent default
    e.preventDefault();
    // Validate form
    validateForm();
    // Submit valid form
    if (isValid && passwordsMatch) {
        saveFormData();
    }
}

// Event listener
form.addEventListener('submit', processFormData);