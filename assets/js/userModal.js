const body = document.querySelector("body");
const userProfileModal = document.querySelector(".user_profile_modal");
const userProfileBtn = document.querySelector(".user_btn");
const userProfileModalCloseBtn = document.querySelector(
  ".user_profile_modal_close"
);
const userModalShadow = document.querySelector(".user_profile_modal_shadow");

userProfileBtn.addEventListener("click", () => {
  openModal();
});

userProfileModalCloseBtn.addEventListener("click", () => {
  closeModal();
});

userModalShadow.addEventListener("click", () => {
  closeModal();
});

function openModal() {
  userModalShadow.classList.add("active");
  userProfileModal.classList.add("active");
  body.style.overflow = "hidden";
}

function closeModal() {
  userModalShadow.classList.remove("active");
  userProfileModal.classList.remove("active");
  body.style.overflow = "auto";
}

