console.log("Script is running.");

// Load the navbar
function loadNavbar() {
  let navbarPath = "";
  const currentPath = window.location.pathname;

  if (currentPath.includes("/cars/") || currentPath.includes("/events/")) {
    navbarPath = "../navbar.html";
  } else {
    navbarPath = "navbar.html";
  }

  fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;
      setupNavToggle(); // Ensure setup runs after navbar is loaded
    })
    .catch(error => console.error('Error loading navbar:', error));
}

// Menu toggle
function setupNavToggle() {
  const toggleBtn = document.getElementById('header-toggle');
  const nav = document.getElementById('navbar');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
      toggleBtn.classList.toggle("active");
    });
  }
}

// Load the navbar on page load
window.onload = loadNavbar;

// Cookie consent popup
var cookiePopup = document.getElementById('cookie-popup');
var cookieAccept = document.getElementById('cookie-accept');

if (getCookie('cookieAccepted') === '') {
  cookiePopup.style.display = 'block';
} else {
  cookiePopup.style.display = 'none';
}

cookieAccept.addEventListener('click', function () {
  setCookie('cookieAccepted', 'true', 365);
  cookiePopup.style.display = 'none';
});

function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return '';
}

// Active button highlight
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.querySelector(".btn.active");
    if (current) {
      current.classList.remove("active");
    }
    this.classList.add("active");
  });
}

// Contact form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return false;
  } else if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }
  return true;
}
