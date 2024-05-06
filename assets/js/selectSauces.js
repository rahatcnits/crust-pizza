const sauceCards = document.querySelectorAll(".product_size_details");

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
      } else {
        select.value = "Regular";
      }
    }
  });
});
