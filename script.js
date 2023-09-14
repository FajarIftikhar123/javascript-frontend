




// // for validation of login pg 
// const email = document.getElementById("email");
// const password = document.getElementById("password");

function login(){

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    const userData = {
        email,
        password,
    };
    console.log(userData); 

    localStorage.setItem('userData', JSON.stringify(userData));

  
    console.log("Login successful!");

    
}

const signup =()=>{
    document.getElementById("signupForm").addEventListener("submit", (e) => {
        e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const imageDataURL = document.getElementById("imageUpload").value;

    const signupuserData = {
        firstName,
        lastName,
         email, 
         password, 
         address, phone,
        image: imageDataURL 
    };
    console.log(signupuserData);
    
    localStorage.setItem("signupData", JSON.stringify(signupuserData));

    

  


});
}


// document.addEventListener("DOMContentLoaded", function () {
// //     const emailInput = document.getElementById("email");
// //     var passwordInput = document.getElementById("passwordInput");
// //    
//     const loginForm = document.getElementById("login-form");


const validateEmail = (inputEmail)=> 
inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


const validatePassword = (inputPassword) => inputPassword.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    // icon sign
    // var passwordToggle = document.getElementById("passwordToggle");
    // passwordToggle.addEventListener("click", function () {
    //     if (passwordInput.type === "password") {
    //         passwordInput.type = "text";
    //         passwordToggle.classList.remove("fa-eye-slash");//
    //         passwordToggle.classList.add("fa-eye");
    //     } else {
    //         passwordInput.type = "password";
    //         passwordToggle.classList.remove("fa-eye");
    //         passwordToggle.classList.add("fa-eye-slash");
    //     }
        
    //  });



    // Add event listener for login
    // loginForm.addEventListener("submit", function (e) {
    //     e.preventDefault(); 

    //     // To Validate the req of  email and password fields
    //     const emailValue = emailInput.value.trim();// trim to reemove spaces,tabs lines
    //     const passwordValue = passwordInput.value.trim();

    //     if (!emailValue || !isValidEmail(emailValue)) {
    //         showError(emailInput, "Entr email address");
    //     } else {
    //         removeError(emailInput);
    //     }

    //     if (!passwordValue) {
    //         showError(passwordInput, "Password is required");
    //     } else {
    //         removeError(passwordInput);
    //     }

        
    //     if (isValidEmail(emailValue) && passwordValue) {
            // localStorage.setItem("loginForm", JSON.stringify(loginForm));// add data to the local storage 
            // console.log(loginForm);
        // }

       


       
    // });
    





///////////////////////////////////////////////////////
//when click on pic button it will go in camera page

// // script.js
// document.addEventListener('DOMContentLoaded', function run () {
//     const cameraButton = document.getElementById("camera-button");

//     cameraButton.addEventListener("click", function () {
//         // Open the camera.html page in a new window or tab
//         window.open("camera.html", "_blank");
//     });

   
// });






// document.addEventListener("DOMContentLoaded", function () {
    

//     const signUpForm = document.getElementById("signup-form");
//      const signUpButton = signUpForm.querySelector("button[type='submit']");

//     signUpForm.addEventListener("submit", function (e) {
//         e.preventDefault(); 

//         // Validate the form fields
       
        
       
//     });
// });
