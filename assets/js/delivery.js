/// delivery button color active
const deliveryBtns = document.querySelectorAll(".delivery_btn button");

deliveryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    deliveryBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
