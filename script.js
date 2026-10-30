
// LOGIN FORM
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const student = document.getElementById("student").value.trim();
        const password = document.getElementById("password").value;

        if (student === "" || password.trim() === "") {
            alert("Please fill in all the fields.");
        } else {
            alert("Your login details have been received!");
        }
    });
}


// REGISTRATION FORM

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

