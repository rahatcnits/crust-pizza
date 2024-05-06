// all modal hide
const cartModal = document.querySelector(".cart_modal");
const cartModalWrapper = document.querySelector(".modal_wrapper");
const closeModal = document.querySelector(".close_modal");

closeModal.addEventListener("click", () => {
  cartModal.classList.remove("active");
});

// pickup modal hide
const pickupModal = document.querySelector(".pickup_modal");
const pickupModalClose = document.querySelector(".close_modal");

pickupModalClose.addEventListener("click", () => {
  pickupModal.classList.remove("active");
});

// bag empty modal hide
const bagEmptyModal = document.querySelector(".bag_empty_modal");
const bagEmptyModalWrapper = document.querySelector(".empty_wrapper");
const bagEmptyModalClose = document.querySelector(".close_modal");

bagEmptyModalClose.addEventListener("click", () => {
  bagEmptyModal.classList.remove("active");
});

document.body.addEventListener("click", function (event) {
  // If click target is not the popup or the openPopup button, close the popup
  if (
    event.target !== bagEmptyModalWrapper &&
    !bagEmptyModalWrapper.contains(event.target)
  ) {
    bagEmptyModal.classList.remove("active");
  }
});

document.body.addEventListener("click", function (event) {
  if (
    event.target !== cartModalWrapper &&
    !cartModalWrapper.contains(event.target)
  ) {
    cartModal.classList.remove("active");
  }
});
