function formatInput(input) {
  // Remove any non-numeric characters except the slash
  var numericValue = input.value.replace(/[^\d/]/g, "");
  // If the numeric value is longer than 2, insert a slash after the first two characters
  if (numericValue.length > 2 && numericValue.indexOf("/") === -1) {
    numericValue =
      numericValue.substring(0, 2) + "/" + numericValue.substring(2);
  }
  // Update the input value
  input.value = numericValue;
}

// Get the input element
var dateInput = document.getElementById("expiration");

// Add an event listener for input formatting
dateInput.addEventListener("input", function () {
  formatInput(this);
});

// Get all input fields
let nameInput = document.getElementById("name");
let cardNumberInput = document.getElementById("cardNumber");
let ccvInput = document.getElementById("ccv");
let expirationInput = document.getElementById("expiration");
let creditBtn = document.getElementById("creditBtn");

// Function to check if all required fields are filled
function checkFields() {
  if (
    nameInput.value &&
    cardNumberInput.value &&
    ccvInput.value &&
    expirationInput.value
  ) {
    creditBtn.disabled = false; // Enable the button
    creditBtn.classList.add("show");
  } else {
    creditBtn.disabled = true; // Disable the button
    creditBtn.classList.remove("show");
  }
}

// Add event listeners to input fields to check for changes
nameInput.addEventListener("input", checkFields);
cardNumberInput.addEventListener("input", checkFields);
ccvInput.addEventListener("input", checkFields);
expirationInput.addEventListener("input", checkFields);
