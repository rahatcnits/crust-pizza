const userBtn = document.querySelector(".user_btn");
const closeMobileAccountBtn = document.querySelector(".close_mobile_account");
const mobileAccount = document.querySelector(".mobile_account");
const mobileAccountWrapper = document.querySelector(".mobile_account_wrapper");

userBtn.addEventListener("click", () => {
  mobileAccount.classList.add("active");
});

closeMobileAccountBtn.addEventListener("click", () => {
  mobileAccount.classList.remove("active");
});

mobileAccount.addEventListener("click", function (event) {
  // If click target is not the popup or the openPopup button, close the popup
  if (
    event.target !== mobileAccountWrapper &&
    !mobileAccountWrapper.contains(event.target)
  ) {
    mobileAccount.classList.remove("active");
  }
});
