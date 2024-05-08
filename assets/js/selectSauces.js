const sauceCards = document.querySelectorAll(".add_sauces_card");

const radios = document.querySelectorAll(".add_sauces_card .radio");

function updateSpecificValue(select) {
  let selectedOption = select.options[select.selectedIndex].value;
  let sauceCard = select.closest(".add_sauces_card"); // Find the closest sauce card

  if (selectedOption === "None") {
    sauceCard.classList.add("selected");
  } else {
    sauceCard.classList.remove("selected");
    radios.forEach((radio) => {
      radio.setAttribute("checked", true);
    });
  }
}

sauceCards.forEach((sauceCard) => {
  sauceCard.addEventListener("click", (event) => {
    // Check if the click target is the select box
    if (!event.target.classList.contains("selectSauces")) {
      const isSelected = sauceCard.classList.contains("selected");

      // Toggle 'selected' class on the clicked card
      sauceCard.classList.toggle("selected");

      // Find the corresponding select box for the clicked card
      const select = sauceCard.querySelector(".selectSauces");

      // Set the value of the select box based on the clicked card's state
      if (!isSelected) {
        select.value = "None";
        radios.forEach((radio) => {
          radio.setAttribute("checked", false);
        });
      } else {
        select.value = "Regular";
        radios.forEach((radio) => {
          radio.setAttribute("checked", true);
        });
      }
    }
  });
});
