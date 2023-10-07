document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (validateEmail(email) && validatePassword(password)) {
        this.submit();
    } else {
        alert('Por favor, verifica tu correo electrónico y contraseña.');
    }
    });
});

function validateEmail(email) {
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
 var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 return re.test(String(password));
}