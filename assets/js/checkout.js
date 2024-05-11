/// delivery button color active
const checkoutPayBtns = document.querySelectorAll(
  ".payment_saved_card_btns button"
);
const checkoutPayCardBtn = document.querySelector(".pay_card_btn");

checkoutPayBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkoutPayBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    if (btn.classList.contains("active")) {
      let payBtnMethodText = btn.children[0].textContent;
      checkoutPayCardBtn.children[0].innerHTML = payBtnMethodText;
    }
  });
});

// suggest product
const suggestProducts = document.querySelectorAll(".suggest_product_item");
const suggestProductTexts = document.querySelectorAll(
  ".suggest_product_add_text"
);

suggestProducts.forEach((suggestProduct) => {
  suggestProduct.addEventListener("click", () => {
    suggestProduct.classList.toggle("active");
  });
});

// card number
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
