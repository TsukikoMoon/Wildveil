// Firebase Imports (Must be at the top)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyAoVMVvZ4Jk1vterX6fsyzdZHNpE1v06r0",
    authDomain: "wildveil.firebaseapp.com",
    projectId: "wildveil",
    storageBucket: "wildveil.firebasestorage.app",
    messagingSenderId: "67231268622",
    appId: "1:67231268622:web:8950a8663334cec74aa15f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function () {
    // Button Navigation
    const signupButton = document.querySelector(".button");  // First button
    const loginButton = document.querySelector(".button-2"); // Second button

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

    // Signup Logic
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    alert("Account Created!");
                    window.location.href = "index.html"; // Redirect after signup
                })
                .catch(error => {
                    alert(error.message);
                });
        });
    }

    // Login Logic
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    alert("Logged In!");
                    window.location.href = "index.html"; // Redirect after login
                })
                .catch(error => {
                    alert(error.message);
                });
        });
    }
});

