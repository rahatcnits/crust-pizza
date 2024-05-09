/// Cart Notification
const cartNotification1 = document.querySelector(".button1");
const cartNotificationCloseBtn1 = document.querySelector(
  ".close_cart_notification1"
);

cartNotificationCloseBtn1.addEventListener("click", () => {
  cartNotification1.classList.remove("active");
});

/// Cart Notification
const cartNotification2 = document.querySelector(".button2");
const cartNotificationCloseBtn2 = document.querySelector(
  ".close_cart_notification2"
);

cartNotificationCloseBtn2.addEventListener("click", () => {
  cartNotification2.classList.remove("active");
});
