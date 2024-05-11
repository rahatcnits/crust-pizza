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
