document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const incrementButton = product.querySelector(".increment");
    const decrementButton = product.querySelector(".decrement");
    const counterDisplay = product.querySelector(".counter");

    const minCount = parseInt(product.getAttribute("data-min-count"));
    let counterValue = parseInt(counterDisplay.textContent);

    function updateCounter() {
      counterDisplay.textContent = counterValue;
      if (counterValue > minCount) {
        decrementButton.classList.add("active");
      } else {
        decrementButton.classList.remove("active");
      }
    }

    incrementButton.addEventListener("click", () => {
      counterValue++;
      updateCounter();
    });

    decrementButton.addEventListener("click", () => {
      if (counterValue > minCount) {
        counterValue--;
        updateCounter();
      }
    });

    // Initial check to set the correct state of the decrement button
    updateCounter();
  });
});


