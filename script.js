// for validation of login pg 
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.getElementById("password_Toggle");
    const loginForm = document.getElementById("login-form");

    // icon sign
    passwordToggle.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordToggle.classList.remove("fa-eye-slash");//
            passwordToggle.classList.add("fa-eye");
        } else {
            passwordInput.type = "password";
            passwordToggle.classList.remove("fa-eye");
            passwordToggle.classList.add("fa-eye-slash");
        }
        
    });

    // Add event listener for login
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        // To Validate the req of  email and password fields
        const emailValue = emailInput.value.trim();// trim to reemove spaces,tabs lines
        const passwordValue = passwordInput.value.trim();

        if (!emailValue || !isValidEmail(emailValue)) {
            showError(emailInput, "Entr email address");
        } else {
            removeError(emailInput);
        }

        if (!passwordValue) {
            showError(passwordInput, "Password is required");
        } else {
            removeError(passwordInput);
        }

        
        if (isValidEmail(emailValue) && passwordValue) {
            localStorage.setItem("loginForm", JSON.stringify(loginForm));// add data to the local storage 
            console.log(loginForm);
        }

       

    });
//js for format
    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to show error message
    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;
        input.parentNode.appendChild(errorElement);
    }

   
   
});


/////////////////////////////////////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded", function () {
    const signUpButton = document.getElementById("signup-button");

    signUpButton.addEventListener("click", function () {
        // Redirect the user to the sign-up page
        window.location.href = "signup.html";
    });
});



///////////////////////////////////////////////////////
//when click on pic button it will go in camera page

// script.js
document.addEventListener('DOMContentLoaded', function run () {
    const cameraButton = document.getElementById("camera-button");

    cameraButton.addEventListener("click", function () {
        // Open the camera.html page in a new window or tab
        window.open("camera.html", "_blank");
    });

   
});






document.addEventListener("DOMContentLoaded", function () {
    

    const signUpForm = document.getElementById("signup-form");
    const signUpButton = signUpForm.querySelector("button[type='submit']");

    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        // Validate the form fields
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        if (!firstName || !lastName || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        alert("Signuo Successful");
        
       
    });
});
