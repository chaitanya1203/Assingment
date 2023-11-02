document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameInput = form.elements['name'];
  const emailInput = form.elements['email'];

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = nameInput.value;
      const email = emailInput.value;

      if (!isValidName(name)) {
          showError(nameInput, 'Please enter a valid name');
          return;
      }

      if (!isValidEmail(email)) {
          showError(emailInput, 'Please enter a valid email address');
          return;
      }

      alert(`Thank you, ${name}! Your email (${email}) has been submitted.`);
  });

  function isValidName(name) {
      return name.length > 2;
  }

  function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
  }

  function showError(input, message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;

      // Remove any existing error message
      const existingError = input.parentElement.querySelector('.error-message');
      if (existingError) {
          input.parentElement.removeChild(existingError);
      }

      // Insert the new error message
      input.parentElement.appendChild(errorDiv);
  }
});
