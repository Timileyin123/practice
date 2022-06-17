const form = document.getElementById('form');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
 e.preventDefault();

 checkInputs();
});

function checkInputs() {

const name1Value = name1.value.trim();
const name2Value = name2.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();

if(name1Value === '') {

    setErrorFor (name1, 'First Name cannot be empty');
} else{

    setSuccessFor (name1);
}

if(name2Value === '') {
    setErrorFor (name2, 'Last Name cannot be empty');
} else{
    setSuccessFor(name2);
}

if(emailValue === '') {
    setErrorFor (email, 'Looks like this is not an email');
} else if (!isEmail(emailValue)){
    setErrorFor(email, 'email is not valid');
}else{
    setSuccessFor(email);
}

if(passwordValue === '') {
    setErrorFor (password, 'Password cannot be empty');
} else{
    setSuccessFor(password);
}
}

function setErrorFor(input, message) {
    const inputGroup = input.parentElement;
    const small = inputGroup.querySelector('small');

    small.innerText = message;

    inputGroup.className = 'input-group error';
}

function setSuccessFor(input) {
    const inputGroup = input.parentElement;
    inputGroup.className = 'input-group success';
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(email);
}
