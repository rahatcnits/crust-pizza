

const crustSelectCards = document.querySelectorAll(".crust_select_card");
const crustSelectCardBtns = document.querySelectorAll(".add_crust_btn");

crustSelectCards.forEach((crustSelectCard, index) => {
  // Added index parameter
  crustSelectCard.addEventListener("click", () => {
    let cardActive = crustSelectCard.classList.toggle("active");
    // Update the corresponding button based on the index
    let crustSelectCardBtn = crustSelectCardBtns[index];
    if (cardActive) {
      crustSelectCardBtn.innerText = "Added"; // Change button text to "Added"
    } else {
      crustSelectCardBtn.innerHTML = `<svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.5V16.5M16.5 9H1.5"
            stroke="black"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Add</span>`; // Revert button content to original
    }
  });
});
