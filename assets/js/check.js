function checkUserName() {
    const userName = document.getElementById('userName');
    
    if (userName.value.trim() == "") {
        userName.style.border = '1px solid red';
        userName.placeholder = 'input username';
    } else {
        userName.style.border = '1px solid green';
    }
}

function checkPassword() {
    const password = document.getElementById('password');
    if (password.value.trim().length >= 6 && containsUpperCase(password.value) && containsLowerCase(password.value) && containsNumber(password.value)) {
        password.style.border = '1px solid green';
    } else {
        password.style.border = '1px solid red';
        password.placeholder = 'write right password'
    }
}

function containsUpperCase(value) {
    return /[A-Z]/.test(value);
}

function containsLowerCase(value) {
    return /[a-z]/.test(value);
}

function containsNumber(value) {
    return /[0-9]/.test(value);
}
