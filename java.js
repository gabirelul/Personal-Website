const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle)
    const nav = document.getElementById(navbarId)


    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle("active")
        })
    }
}
showMenu('header-toggle', 'navbar')


// const expandImage = document.querySelector('.expand-image');

// expandImage.addEventListener('click', () => {
//     expandImage.classList.toggle('expand-image-fullscreen');
// });

var cookiePopup = document.getElementById('cookie-popup');
var cookieAccept = document.getElementById('cookie-accept');

if (getCookie('cookieAccepted') === '') {
  cookiePopup.style.display = 'block';
}

cookieAccept.addEventListener('click', function() {
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