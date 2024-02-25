// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKtQvSTeC32rggVHu_K-e1Mdl8D5vcsoY",
    authDomain: "health-intelect-web.firebaseapp.com",
    projectId: "health-intelect-web",
    storageBucket: "health-intelect-web.appspot.com",
    messagingSenderId: "495898657292",
    appId: "1:495898657292:web:aaab4cee6794e5be186429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);


//renu's code :thumbsup
const fullNameInput = document.getElementById('logname');
const emailInput = document.getElementById('logemail');
const passwordInput = document.getElementById('logpass');
const submitButton = document.getElementById('SubmitButton');
const nextPageURL = 'template/home.html';
// submitButton.addEventListener('click', validateForm);

function validateForm(event) {
    event.preventDefault();
    resetErrors();

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (fullName === '') {
        displayError('name-error', 'Please enter your full name.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('email-error', 'Please enter a valid email address.');
    }

    if (password.length < 6) {
        displayError('password-error', 'Password must be at least 6 characters long.');
    }
    else {
        RegisterUser(email, password);
    }

    // If no errors, you can submit the form
    // else {
    //     document.querySelector('form').submit();
    // }
}

function displayError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.innerText = message;
}

function resetErrors() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.innerText = '';
    });
}


//my code again :xD

function RegisterUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((credentials) => {
            // User registration successful
            console.log("User registered successfully", credentials);

            // Redirect the user to the next page
            window.location.href = nextPageURL;
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        });
}

function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User login successful
            console.log("User logged in successfully", userCredential);

            // Redirect the user to the next page
            window.location.href = nextPageURL;
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        });
}

// Listen for changes in authentication state
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, redirect to the next page
//         window.location.href = nextPageURL;
//     }
// });

submitButton.addEventListener('click', validateForm);