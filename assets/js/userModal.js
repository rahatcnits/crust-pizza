// user modal
const body = document.querySelector("body");
const userProfileModal = document.querySelector(".user_profile_modal");
const userProfileBtn = document.querySelector(".user_btn");
const userProfileModalCloseBtn = document.querySelector(
  ".user_profile_modal_close"
);
const userModalShadow = document.querySelector(".user_profile_modal_shadow");

userProfileBtn.addEventListener("click", () => {
  userModalShadow.classList.add("active");
  userProfileModal.classList.add("active");
  body.style.overflow = "hidden";
});

userProfileModalCloseBtn.addEventListener("click", () => {
  userModalShadow.classList.remove("active");
  userProfileModal.classList.remove("active");
  body.style.overflow = "auto";
});
