document.addEventListener("DOMContentLoaded", function () {
  // Get all progress elements and progress text elements
  const progressCurrentVals = document.querySelectorAll(
    ".progress_current_val"
  );
  const progressBars = document.querySelectorAll(".progress-bar2");

  // Function to show progress text after animation ends
  const showProgressText = (progressBar, progressCurrentVal) => {
    progressBar.addEventListener(
      "animationend",
      () => {
        progressCurrentVal.classList.add("show");
      },
      { once: true }
    );
  };

  // Initially hide progress text
  progressCurrentVals.forEach((progressCurrentVal) => {
    progressCurrentVal.classList.remove("show");
  });

  // Show progress text after the progress bar animation ends
  progressBars.forEach((progressBar, index) => {
    const progressCurrentVal = progressCurrentVals[index];
    showProgressText(progressBar, progressCurrentVal);
  });

  // Detect tab changes and reapply the animation and listener
  document.querySelectorAll(".tab_btn").forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
      progressBars.forEach((progressBar, index) => {
        const progressCurrentVal = progressCurrentVals[index];
        progressBar.style.animation = "none";
        progressBar.offsetHeight; // Trigger reflow
        progressBar.style.animation = "";

        progressCurrentVal.classList.remove("show");
        showProgressText(progressBar, progressCurrentVal);
      });
    });
  });
});
