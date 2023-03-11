const form = document.querySelector("#form");
const userName = document.querySelector("#user-name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#your-subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#your-email");
const emailError = document.querySelector("#email-error");
const userMessage = document.querySelector("#your-message");
const userMessageError = document.querySelector("#user-message--error");
const message = document.querySelector("#message");

const formSubmissionHandler = (event) => {
  event.preventDefault();

  const form = event.target,
    { action, method } = form,
    body = new FormData(form);

  try {
    fetch(action, {
      method,
      body
    })

    function validateForm() {
      if (checkLength(userName.value, 1)) {
        nameError.style.display = "none";
      } else {
        nameError.style.display = "block";
      }

      if (checkLength(subject.value, 1)) {
        subjectError.style.display = "none";
      } else {
        subjectError.style.display = "block";
      }

      if (checkEmail(email.value)) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
      }

      if (checkLength(userMessage.value, 1)) {
        userMessageError.style.display = "none";
      } else {
        userMessageError.style.display = "block";
      }

      formCorrectlyValidated();
    };

    function checkLength(value, len) {
      if (value.trim().length > len) {
        return true;
      }
      else {
        return false;
      }
    }

    function checkEmail(email) {
      const regEx = /\S+@\S+\.\S+/;
      const patternMatches = regEx.test(email);
      return patternMatches;
    }

    validateForm();

    function formCorrectlyValidated() {
      if (checkLength(userName.value, 1) && (checkLength(subject.value, 1)) && (checkEmail(email.value)) && (checkLength(userMessage.value, 1))) {
        message.innerHTML = `<p class="success">Your message has been sent.</p>`;
        form.reset();
      }
    }
  }

  catch (error) {
    form.innerHTML = `An error occurred beyond your control! Call to <a href="tel:+4793928270">+47 939 28 270</a> (Mariusz Rozycki) to fix a problem.`;
  }
};

form.addEventListener("submit", formSubmissionHandler);



