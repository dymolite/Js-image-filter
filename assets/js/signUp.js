const signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener('click', () => {
    const mail = document.getElementById('mail');
    const rePassword = document.getElementById('rePassword');
    const trueName = document.getElementById('trueName');
    
    if (mail.value.trim() !== '' && (mail.value.match(/@/gi) || []).length === 1) {
        mail.style.border = '1px solid green';
    } else {
        mail.style.border = '1px solid red';
        mail.value = '';
        mail.placeholder = 'input right email';
    }
    
    if (trueName.value.trim() == "") {
        trueName.style.border = '1px solid red';
        trueName.placeholder = 'input name';

    } else {
        trueName.style.border = '1px solid green';
    }
    
    checkUserName();

    checkPassword();
    
    if (rePassword.value.trim() !== '' && password.value == rePassword.value) {
        rePassword.style.border = '1px solid green';
    } else {
        rePassword.style.border = '1px solid red';
    }
});
