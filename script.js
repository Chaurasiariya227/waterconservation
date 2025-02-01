// Get modal elements
var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("signup-modal");

// Get the buttons that open the modals
var loginBtn = document.getElementById("login-btn");
var signupBtn = document.getElementById("signup-btn");

// Get the <span> elements that close the modals
var closeLogin = document.getElementById("close-login");
var closeSignup = document.getElementById("close-signup");

// When the user clicks the login button, open the login modal
loginBtn.onclick = function(event) {
  event.preventDefault();  // Prevent default button action (if any)
  // Close any other modal if open
  if (signupModal.style.display === "block") {
    signupModal.style.display = "none";
  }
  loginModal.style.display = "block";
}

// When the user clicks the signup button, open the signup modal
signupBtn.onclick = function(event) {
  event.preventDefault();  // Prevent default button action (if any)
  // Close any other modal if open
  if (loginModal.style.display === "block") {
    loginModal.style.display = "none";
  }
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the login modal
closeLogin.onclick = function() {
  loginModal.style.display = "none";
}

// When the user clicks on <span> (x), close the signup modal
closeSignup.onclick = function() {
  signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  // Close login modal if clicking outside of it
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
  
  // Close signup modal if clicking outside of it
  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
}
