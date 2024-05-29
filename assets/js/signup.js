// Get all input fields
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phnNumber = document.getElementById("phnNumber");
let signupBtn = document.getElementById("signup_btn");

// Function to check if all required fields are filled
function checkFields() {
  if (fname.value && lname.value && email.value && phnNumber.value) {
    signupBtn.disabled = false; // Enable the button
    signupBtn.classList.add("show");
  } else {
    signupBtn.disabled = true; // Disable the button
    signupBtn.classList.remove("show");
  }
}

// Add event listeners to input fields to check for changes
fname.addEventListener("input", checkFields);
lname.addEventListener("input", checkFields);
email.addEventListener("input", checkFields);
phnNumber.addEventListener("input", checkFields);

// Get all input fields
let mobileFName = document.getElementById("mobileFName");
let mobileLName = document.getElementById("mobileLName");
let mobileEmail = document.getElementById("mobileEmail");
let mobilePhnNumber = document.getElementById("mobilePhnNumber");
let mobileSignupBtn = document.getElementById("mobileSignupBtn");

// Function to check if all required fields are filled
function checkFields() {
  if (
    mobileFName.value &&
    mobileLName.value &&
    mobileEmail.value &&
    mobilePhnNumber.value
  ) {
    mobileSignupBtn.disabled = false; // Enable the button
    mobileSignupBtn.classList.add("show");
  } else {
    mobileSignupBtn.disabled = true; // Disable the button
    mobileSignupBtn.classList.remove("show");
  }
}

// Add event listeners to input fields to check for changes
mobileFName.addEventListener("input", checkFields);
mobileLName.addEventListener("input", checkFields);
mobileEmail.addEventListener("input", checkFields);
mobilePhnNumber.addEventListener("input", checkFields);

// format phone number
function formatPhoneNumber(input) {
  // Remove all non-numeric characters
  let value = input.value.replace(/\D/g, "");

  // Limit the input length to 10 digits
  value = value.slice(0, 10);

  // Format the number as 123-123-1234
  let formattedValue = value;

  if (value.length > 3 && value.length <= 6) {
    formattedValue = value.slice(0, 3) + "-" + value.slice(3);
  } else if (value.length > 6) {
    formattedValue =
      value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);
  }

  input.value = formattedValue;
}
