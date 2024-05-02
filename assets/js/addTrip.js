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
