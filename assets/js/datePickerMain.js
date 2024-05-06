function loadJQueryUI(callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://code.jquery.com/ui/1.12.1/jquery-ui.js";
  script.onload = callback;
  document.head.appendChild(script);
}

// Initialize datepicker once jQuery and jQuery UI are both loaded
function initializeDatepicker() {
  $(document).ready(function () {
    $("#datepicker").datepicker({
      dateFormat: "D, M d", // Format date as "Sat, Apr 6"
      onSelect: function (dateText) {
        // Optional: You can add code to handle the selection of the date if needed
      },
    });

    // Set default date to today
    $("#datepicker").datepicker("setDate", new Date());
  });
}

// Check if jQuery is available
if (window.jQuery) {
  // Load jQuery UI if jQuery is available
  loadJQueryUI(function () {
    // Initialize datepicker after jQuery UI is loaded
    initializeDatepicker();
  });
} else {
  console.error("jQuery is not available.");
}
