/// Cart Notification
const cartNotification = document.querySelector(".cart_notification");
const cartNotificationCloseBtn = document.querySelector(
  ".close_cart_notification"
);

cartNotificationCloseBtn.addEventListener("click", () => {
  cartNotification.classList.remove("active");
});
