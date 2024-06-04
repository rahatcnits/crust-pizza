// trip add
const selectTripItems = document.querySelectorAll(".select_trip_item");
let tripValues = document.querySelectorAll(".trip_value");
const manualTripBtn = document.querySelector(".manual_trip_title");
const manualTripValue = document.querySelector(".manual_trip_value");
let customTripInput = manualTripValue.children[0];

selectTripItems.forEach(function (selectTripItem) {
  selectTripItem.addEventListener("click", function () {
    selectTripItems.forEach(function (selectTripItem) {
      selectTripItem.classList.remove("active");
    });

    manualTripValue.classList.remove("visible");
    selectTripItem.classList.add("active");
    customTripInput.value = "";

    tripValues.forEach((tripValue) => {
      if (selectTripItem.textContent === "None" | selectTripItem.textContent === "Custom") {
        tripValue.innerHTML = "$0.00";
      } else {
  
        tripValue.innerHTML = selectTripItem.children[0].textContent;
      }
      
      customTripInput.addEventListener("keyup", () => {
        if (customTripInput.value.length === 0) {
          tripValue.innerHTML = `$0.00`;
        } else {
          tripValue.innerHTML = `$${customTripInput.value}`;
        }
      })
    })

  });
});

// add card

const cardAdd = document.querySelector(".add_card_content");
const cardGift = document.querySelector(".gift_card_content");
function hideShow(val) {
  if (val === 1) {
    cardAdd.classList.add("active");
    cardGift.classList.remove("active");
  }

  if (val === 2) {
    cardAdd.classList.remove("active");
    cardGift.classList.add("active");
  }
}

manualTripBtn.addEventListener("click", () => {
  manualTripValue.classList.add("visible");
})

