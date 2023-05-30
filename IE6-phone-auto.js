// Select the flag element and phone input
const flagElement = document.querySelector('.selected-flag');
const phoneInput = document.querySelector('#phone');
const phoneNumberInput = document.querySelector('[w-el="signUp_phoneNumber"]');

// Function to sanitize phone number
function sanitizePhoneNumber(phoneNumber) {
  // Remove spaces
  let sanitizedNumber = phoneNumber.replace(/\s/g, '');

  // If it starts with 0, remove it
  if (sanitizedNumber.startsWith('0')) {
    sanitizedNumber = sanitizedNumber.slice(1);
  }

  return sanitizedNumber;
}

// Listen for changes on the flag element's title attribute
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type == "attributes") {
      updatePhoneNumber();
    }
  });
});

// Start observing
observer.observe(flagElement, { attributes: true });

// Listen for blur event on the phone input field
phoneInput.addEventListener('blur', updatePhoneNumber);

// Function to update the phoneNumberInput value
function updatePhoneNumber() {
  const titleValue = flagElement.getAttribute('title'); // get new title value
  const countryCode = titleValue.split(": ")[1]; // extract country code
  
  // Get the phone number, sanitize it, and combine with country code
  const phoneNumber = sanitizePhoneNumber(phoneInput.value);
  const completeNumber = countryCode + phoneNumber;

  phoneNumberInput.value = completeNumber; // set the complete number as the input's value
  
  // Dispatch an input event
  const event = new Event('input', { bubbles: true });
  phoneNumberInput.dispatchEvent(event);
}
