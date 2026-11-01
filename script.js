// LOGIN PAGE
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const student = document.getElementById("student").value;
        const password = document.getElementById("password").value;

        alert("Your login details have been received!");

    });
}


// REGISTRATION PAGE
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
        } else {
            alert("Registration successful!");
        }

    });
}
