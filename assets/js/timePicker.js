document.addEventListener("DOMContentLoaded", function () {
  const timeInput = document.getElementById("timeInput");
  const timeDropdown = document.querySelector(".time-dropdown");
  const confirmBtn = document.getElementById("confirmBtn");
  const NUM_DISPLAYED_ITEMS = 4; // Number of time options to display at a time

  // Function to generate time options
  function generateTimeOptions() {
    const options = ["ASAP"];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const ampm = hour < 12 ? "AM" : "PM";
        const displayHour = hour % 12 || 12; // Convert to 12-hour format
        const formattedHour = displayHour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push(`${formattedHour}:${formattedMinute} ${ampm}`);
      }
    }
    return options;
  }

  // Function to update time dropdown
  function updateTimeDropdown() {
    const timeOptions = generateTimeOptions();
    const timeList = document.querySelector(".time-dropdown ul");
    timeList.innerHTML = "";
    for (let i = 0; i < timeOptions.length; i++) {
      const li = document.createElement("li");
      li.textContent = timeOptions[i];
      timeList.appendChild(li);
    }
    timeDropdown.style.maxHeight = `${(NUM_DISPLAYED_ITEMS + 1) * 40}px`; // Include space for the 'ASAP' option

    // Add active class to the first item (ASAP)
    const firstItem = timeList.querySelector("li");
    if (firstItem.textContent === "ASAP") {
      firstItem.classList.add("active");
    }
  }

  // Display current time in input field
  function displayCurrentTime() {
    timeInput.value = "ASAP"; // Set default value to "ASAP" on page load
  }

  // Update time dropdown and display current time on load
  updateTimeDropdown();
  displayCurrentTime();

  // Toggle time dropdown visibility
  timeInput.addEventListener("click", function () {
    timeDropdown.style.display =
      timeDropdown.style.display === "block" ? "none" : "block";
  });

  // Set selected time on click
  timeDropdown.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      timeInput.value = e.target.textContent;
      // Remove the 'active' class from all list items
      const timeListItems = document.querySelectorAll(".time-dropdown ul li");
      timeListItems.forEach((item) => {
        item.classList.remove("active");
      });
      // Add the 'active' class to the clicked list item
      e.target.classList.add("active");
    }
  });

  // Set selected time on confirm button click
  confirmBtn.addEventListener("click", function () {
    timeDropdown.style.display = "none";
  });

  // Close time dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!timeInput.contains(e.target) && !timeDropdown.contains(e.target)) {
      timeDropdown.style.display = "none";
    }
  });
});
