
const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");
if (registerForm);
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const fullname = document.getElementById("fullname").value.trim();

        const email = document.getElementById("email").value.trim();

        const regnumber = document.getElementById("regnumber").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const password = document.getElementById("newpassword").value;

        const confirmPassword = document.getElementById("confirm").value;
        if (password !== confirmPassword) {

            registerMessage.textContent = "Passwords do not match!";
            registerMessage.style.color = "red";

            return;
        }
        if (password.length < 8) {

            registerMessage.textContent = "Password must contain at least 8 characters.";
            registerMessage.style.color = "red";

            return;
        }
        registerMessage.textContent = "Registration details are valid!";
        registerMessage.style.color = "green";
        console.log("Full Name:", fullname);
        console.log("Email:", email);
        console.log("Student Number:", regnumber);
        console.log("Phone:", phone);

    });

}
const loginForm = document.getElementById("loginForm");


const loginMessage = document.getElementById("message");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();
        const student = document.getElementById("student").value.trim();

        const password = document.getElementById("password").value;
        if (student === "" || password === "") {

            loginMessage.textContent = "Please fill in all fields.";
            loginMessage.style.color = "red";

            return;
        }
        loginMessage.textContent =
            "Login form working! Database authentication will come later.";

        loginMessage.style.color = "green";

        console.log("Login Email or Student Number:", student);

    });

}
