
// ===================================
// MUST STUDENT REGISTRATION SYSTEM
// ===================================

// Get the registration form
const registerForm = document.getElementById("registerForm");

// Get the message area
const registerMessage = document.getElementById("registerMessage");

// Check whether registration form exists
if (registerForm) {

    // Listen for form submission
    registerForm.addEventListener("submit", function(event) {

        // Prevent page from refreshing
        event.preventDefault();

        // Get student details
        const fullname = document.getElementById("fullname").value.trim();

        const email = document.getElementById("email").value.trim();

        const regnumber = document.getElementById("regnumber").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const password = document.getElementById("newpassword").value;

        const confirmPassword = document.getElementById("confirm").value;

        // Check whether passwords match
        if (password !== confirmPassword) {

            registerMessage.textContent = "Passwords do not match!";
            registerMessage.style.color = "red";

            return;
        }

        // Check password length
        if (password.length < 8) {

            registerMessage.textContent = "Password must contain at least 8 characters.";
            registerMessage.style.color = "red";

            return;
        }

        // Display successful validation message
        registerMessage.textContent = "Registration details are valid!";
        registerMessage.style.color = "green";

        // Display details in browser console for testing
        console.log("Full Name:", fullname);
        console.log("Email:", email);
        console.log("Student Number:", regnumber);
        console.log("Phone:", phone);

    });

}

// ===================================
// MUST STUDENT LOGIN SYSTEM
// ===================================

// Get the login form
const loginForm = document.getElementById("loginForm");

// Get the login message area
const loginMessage = document.getElementById("message");

// Check whether login form exists
if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get login details
        const student = document.getElementById("student").value.trim();

        const password = document.getElementById("password").value;

        // Check empty fields
        if (student === "" || password === "") {

            loginMessage.textContent = "Please fill in all fields.";
            loginMessage.style.color = "red";

            return;
        }

        // Temporary response
        loginMessage.textContent =
            "Login form working! Database authentication will come later.";

        loginMessage.style.color = "green";

        console.log("Login Email or Student Number:", student);

    });

}
