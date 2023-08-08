let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });
var header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY>100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


let darkModeIcon = document.querySelector('#darkMode-icon');
let isDarkMode = true; // Set this to true for default dark mode, and false for default light mode

function setDarkMode(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  // Your existing dark mode icon toggle logic
  darkModeIcon.classList.toggle('bx-sun', isDark);
}

darkModeIcon.onclick = () => {
  isDarkMode = !isDarkMode;
  setDarkMode(isDarkMode);
};

// Call the setDarkMode function on page load
setDarkMode(isDarkMode);

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});


ScrollReveal().reveal('.home-content, .heading, .skills_head h2', { origin: 'top' });

ScrollReveal().reveal('.home-img img, .skills-container, .portfolio-box, .contact form, .skills_main', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img img, #colone', { origin: 'left' });

ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, #coltwo', { origin: 'right' });


function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

const serviceID = "service_f8hs11f"
const templateID = "template_sn8leub"

emailjs
.send(serviceID, templateID, params)
.then((res) => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
  console.log(res);
  alert("Your Message Sent Successfully!!");
})
.catch((err) => console.log(err));

}