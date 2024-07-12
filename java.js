console.log("Script is running.");

const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle)
  const nav = document.getElementById(navbarId)


  if (headerToggle && navbarId) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      toggleBtn.classList.toggle("active")
    })
  }
}
showMenu('header-toggle', 'navbar')


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
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return '';
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Working contact form -----------------------------------
function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return false;
  }
  return true;
}
