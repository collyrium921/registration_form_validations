function validation() {
    var name = document.getElementById('name').value,
        username = document.getElementById('username').value,
        number = document.getElementById('number').value,
        email = document.getElementById('email').value,
        alt_email = document.getElementById('alt_email').value,
        atpos = email.indexOf("@"),
        dotpos = email.lastIndexOf("."),
        alt_atpos = alt_email.indexOf("@"),
        alt_dotpos = alt_email.lastIndexOf("."),
        password = document.getElementById('password').value,
        c_password = document.getElementById('c_password').value;


    if (name.length <= 3) {
        alert('name should be greater than 3 characters');
        return;
    }

    if (username.length <= 6) {
        alert('username should be greater than 6 character');
        return;
    }

    if (number.length < 10) {
        alert('number should be of 10 digits');
        return;
    }

    if (number.length > 10) {
        alert('number should be of 10 digits');
        return;
    }

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert('enter valid email address');
        return;
    }

    if (alt_atpos < 1 || (alt_dotpos - alt_atpos) < 2) {
        alert('enter valid email address');
    }

    if (password.length < 8) {
        alert('atleast 8 charachters are must');
        return;
    }

    if (!(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g))) {
        alert('incorrect password');
    }
    if (password != c_password) {
        alert('confirm password should match your password');
        return;
    }
}