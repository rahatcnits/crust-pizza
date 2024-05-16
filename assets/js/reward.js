const progressCurrentVals = document.querySelectorAll(".progress_current_val");

setTimeout(() => {
  progressCurrentVals.forEach((progressCurrentVal) => {

    progressCurrentVal.classList.add("show");
  })
}, 4000);
