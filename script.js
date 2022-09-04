const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const repassword = document.getElementById('repassword');


function error(input, message) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';

}

function success(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value == '') {
        error(username, 'Username must be enter.');
    } else {
        success(username)
    }

    if (email.value == '') {
        error(email, 'Email error.')
    }
    else if (!validateEmail(email.value)) {
        error(email, 'please check your email');
    }
    else {
        success(email)
    }

    if (password.value == '') {
        error(password, 'password error')
    }



    else {
        success(password)
    }

    if (repassword.value == '') {
        error(repassword, 'your passwords are doesnt match')
    } else {
        success(repassword)
    }



})

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};