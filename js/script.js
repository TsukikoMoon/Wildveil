document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.querySelector(".button.w-button");
    const loginButton = document.querySelector(".button-2.w-button");

    if (signupButton) {
        signupButton.addEventListener("click", function () {
            window.location.href = "signup.html";
        });
    }

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    }
});
