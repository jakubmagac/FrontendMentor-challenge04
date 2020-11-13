const name = document.querySelector("input[name='name']");
const lastName = document.querySelector("input[name='last-name']");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");

const nameError = document.querySelector('.name-error');
const lastNameError = document.querySelector('.last-name-error');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');

const check = (event) => {

    let valid = true;

    name.classList.remove('invalid');
    lastName.classList.remove('invalid');
    email.classList.remove('invalid');
    password.classList.remove('invalid');

    nameError.style.display = 'none';
    lastNameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    if(name.value === "" || !name.validity.valid){
        nameError.style.display = 'block';
        name.classList.add('invalid')
        valid = false;
    }

    if(lastName.value === "" || !lastName.validity.valid){
        lastNameError.style.display = 'block';
        lastName.classList.add('invalid')
        valid = false;
    }

    if(email.value === "" || !email.validity.valid){
        emailError.style.display = 'block';
        email.classList.add('invalid')
        valid = false;
    }

    if(password.value === "" || !password.validity.valid){
        passwordError.style.display = 'block';
        password.classList.add('invalid')
        valid = false;
    }

    if(!valid) return false;
    return true;
}