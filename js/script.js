document.addEventListener("DOMContentLoaded", function () {
    // Target the Webflow buttons using their class names
    const signupButton = document.querySelector(".button.w-button");
    const loginButton = document.querySelector(".button-2.w-button");

    if (signupButton) {
        signupButton.addEventListener("click", function () {
            window.location.href = "signup.html"; // Change this to your actual sign-up page
        });
    }

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            window.location.href = "login.html"; // Change this to your actual login page
        });
    }
});
