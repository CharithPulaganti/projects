// Existing code - scroll functionality and navbar hide/show
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// New code - login redirection
document.getElementById('login-signup').addEventListener('click', () => {
    window.location.href = 'login-signup.html'; // Redirect to login-signup page
});

// Additional code to handle user login/signup form
// Check if normal user or creator is logged in and show their info

const normalUser = JSON.parse(localStorage.getItem('normalUser'));
const creator = JSON.parse(localStorage.getItem('creator'));

const loginSignupButton = document.getElementById('login-signup');

// Check if user is logged in and update UI accordingly
if (normalUser || creator) {
    // If user is logged in, update navbar
    loginSignupButton.textContent = 'Profile'; // Change the button to 'Profile' or whatever text you want
    loginSignupButton.addEventListener('click', () => {
        window.location.href = 'profile.html'; // Redirect to profile page when clicked
    });

    // Display user info
    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info');
    
    if (normalUser) {
        userInfoDiv.innerHTML = `<p>Welcome, ${normalUser.name}</p>`;
    } else if (creator) {
        userInfoDiv.innerHTML = `<p>Welcome, ${creator.name}</p>`;
    }
    document.querySelector('body').appendChild(userInfoDiv); // You can append this wherever you need on your page
} else {
    // If no user is logged in, show login/signup
    loginSignupButton.textContent = 'Login | Sign Up';
}
