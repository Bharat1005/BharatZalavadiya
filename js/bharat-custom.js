'use strict';





// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
document.addEventListener('DOMContentLoaded', (event) => {
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const subject = document.getElementById("subject");
            const message = document.getElementById("message");
            const form = document.querySelector("[data-form]");
            const formInputs = document.querySelectorAll("[data-form-input]");
            const formBtn = document.querySelector("[data-form-btn]");

            function sendEmail() {
                const bodyMessage = `Name: ${name.value} <br>Email: ${email.value} <br>Subject: ${subject.value} <br>Message: ${message.value}`;

                Email.send({
                    Host: "smtp.elasticemail.com",
                    Username: "zalavadiyabharat677@gmail.com",
                    Password: "1D1D37C4CE772EEA1BB755E132DF4CCB54AA",
                    To: 'zalavadiyabharat677@gmail.com',
                    From: email.value,
                    Subject: subject.value,
                    Body: bodyMessage
                }).then(
                    message => alert('Mail sent successfully')
                ).catch(
                    error => alert('Failed to send mail: ' + error)
                );
            }

            // Add event to all form input fields
            formInputs.forEach(input => {
                input.addEventListener("input", () => {
                    // Check form validation
                    if (form.checkValidity()) {
                        formBtn.removeAttribute("disabled");
                    } else {
                        formBtn.setAttribute("disabled", "");
                    }
                });
            });
        });


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
  // Block Ctrl+Shift+I (Inspect), F12 (DevTools), and Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J') || e.key === 'F12') {
      return false;
  }
  // Block Ctrl+U (View Source)
  if (e.ctrlKey && e.key === 'U') {
      return false;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "C") ||  (e.ctrlKey && e.shiftKey && e.key === "I")  ||   (e.ctrlKey && e.shiftKey && e.key === "J")  || (e.ctrlKey  && e.key === "u") ) {
      e.preventDefault();
  }
});

function sendToWhatsApp() {
  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // WhatsApp API URL
  var whatsappUrl = "https://wa.me/";  // Base WhatsApp URL
  var phoneNumber = "917874637630";    // Replace with your phone number (international format, no +)

  // Create the message body
  var textMessage = "Hello, my name is " + name + ".\nEmail: " + email + "\nMessage: " + message;

  // Encode the message
  var encodedMessage = encodeURIComponent(textMessage);

  // Open WhatsApp with pre-filled message
  var whatsappLink = whatsappUrl + phoneNumber + "?text=" + encodedMessage;

  // Open the link in a new tab
  window.open(whatsappLink, '_blank');
}


// 
document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = document.querySelectorAll(".navbar-item button");

  projectLinks.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();

          const href = link.getAttribute("href").replace(".html", ""); // Remove .html from href
          history.pushState(null, "", href); // Update the URL without reloading the page

          // Optionally, load content dynamically (e.g., via AJAX)
          console.log(`Navigated to: ${href}`);
      });
  });
});


