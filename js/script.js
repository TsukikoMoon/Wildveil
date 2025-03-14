document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.querySelector(".button");
    const loginButton = document.querySelector(".button:last-of-type"); // Selects the second button

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
