const condimentsPromoInput = document.querySelector(".condiments_promo_input");
const promoApplyBtn = document.querySelector(".apply");

condimentsPromoInput.addEventListener("keyup", (e) => {
  let { value } = e.target;

  if (value.length > 0) {
    promoApplyBtn.removeAttribute("disabled");
    promoApplyBtn.classList.add("show");
  } else {
    promoApplyBtn.setAttribute("disabled", true);
    promoApplyBtn.classList.remove("show");
  }
});
