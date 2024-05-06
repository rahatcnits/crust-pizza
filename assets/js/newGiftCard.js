document.addEventListener("DOMContentLoaded", () => {
  const giftCardInputs = document.querySelectorAll(".giftCardInput");
  const giftCardBtn = document.querySelector(".gift_btn");

  const checkInputs = () => {
    for (let input of giftCardInputs) {
      if (input.value.trim() === "") {
        return false;
      }
    }
    return true;
  };

  const handleInput = () => {
    if (checkInputs()) {
      giftCardBtn.removeAttribute("disabled");
      giftCardBtn.classList.add("show");
    } else {
      giftCardBtn.setAttribute("disabled", true);
      giftCardBtn.classList.remove("show");
    }
  };

  // Add event listener to each input field
  giftCardInputs.forEach((giftCardInput) => {
    giftCardInput.addEventListener("input", handleInput);
  });

  // Initial check
  handleInput();
});
