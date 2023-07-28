const form = document.querySelector('#form');
const errorMessages = document.querySelectorAll('.error-message');
const errorIcons = document.querySelectorAll('.error-icon');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  errorMessages.forEach(message => {
    message.textContent = '';
    message.display = 'none';
  });

  inputs.forEach(input => {
    input.classList.remove('error');
  })

  let firstName = document.querySelector('#first-name');
  let lastName = document.querySelector('#last-name');
  let email = document.querySelector('#email');
  let password = document.querySelector('#password');
  let isValid = true;

  email.classList.remove('red');

  if (firstName.value.trim() === '') {
    isValid = false;
    displayError(firstName, 'First Name cannot be empty');
  }

  if (lastName.value.trim() === '') {
    isValid = false;
    displayError(lastName, 'Last Name cannot be empty');
  }

  if (email.value.trim() === '') {
    isValid = false;
    displayError(email, 'Email cannot be empty');
  } else if (!emailValid(email.value)) {
    isValid = false;
    displayError(email, 'Looks like this is not an email');
  }

  if (password.value.trim() === '') {
    isValid = false;
    displayError(password, 'Password cannot be empty');
  }
});

function emailValid(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function displayError(element, msg) {
  const errorText = element.nextElementSibling.nextElementSibling;
  errorText.textContent = msg;
  errorText.style.display = 'block';
  element.classList.add('error');
}

