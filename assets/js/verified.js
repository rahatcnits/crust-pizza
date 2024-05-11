const verifiedBtn = document.querySelector("#verified .Passcode_btn");

setTimeout(() => {
  verifiedBtn.removeAttribute("disabled");
  verifiedBtn.classList.add("show");
}, 6700);
