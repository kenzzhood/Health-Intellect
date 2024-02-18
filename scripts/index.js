// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
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
const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById("signInButton");
const signOutButton = document.getElementById("signOutButton");
const message = document.getElementById("message");

signOutButton.style.display = "none";
message.style.display = "none";

const userSignIn = async () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            console.log(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
}

const userSignout = async () => {
    signOut(auth).then(() => {
        alert("you have signed out successfully");
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("you have signed in !");
        signOutButton.style.display = "block";
        message.style.display = "block";
    } else {
        alert("you are signed out!")
        signOutButton.style.display = "none";
        message.style.display = "none";
    }
})


signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignout);