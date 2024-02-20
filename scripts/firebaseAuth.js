// Firebase Authentication functions
function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Signed in:', user);
            // You can redirect or perform other actions after successful sign-in
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign in error:', errorCode, errorMessage);
        });
}

function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registered and signed in
            const user = userCredential.user;
            console.log('Registered and signed in:', user);
            // You can redirect or perform other actions after successful registration
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Registration error:', errorCode, errorMessage);
        });
}




function checkAuthState() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, redirect to another HTML page
            window.location.href = '../pages/profile.html'; // Replace 'dashboard.html' with the desired page
        } else {
            // User is not signed in, stay on the login page
            // You can add any additional logic or UI updates here
            console.log('User is not signed in');
        }
    });
}

// Call the checkAuthState function when the page is loaded
document.addEventListener('DOMContentLoaded', checkAuthState);

