// trip add
const selectTripItems = document.querySelectorAll(".select_trip_item");
console.log(selectTripItems);

selectTripItems.forEach(function (selectTripItem) {
  selectTripItem.addEventListener("click", function () {
    selectTripItems.forEach(function (selectTripItem) {
      selectTripItem.classList.remove("active");
    });

    selectTripItem.classList.add("active");
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
