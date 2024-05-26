document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuTabs = document.querySelectorAll(".tab_btn");
  const mobileMenuContents = document.querySelectorAll(".tab_content");
  const tabLine = document.querySelector(".tab_line");

  // Function to set the tab line position and width
  function setTabLine(index) {
    tabLine.style.width = mobileMenuTabs[index].offsetWidth + "px";
    tabLine.style.left = mobileMenuTabs[index].offsetLeft + "px";
  }

  // Function to set the initial active tab and content
  function initializeTabs() {
    let activeIndex = 0;
    mobileMenuTabs.forEach((menuTab, index) => {
      if (menuTab.classList.contains("active")) {
        activeIndex = index;
      }
    });
    activateTab(activeIndex);
    setTabLine(activeIndex); // Set the tab line for the active tab
  }

  // Function to activate a specific tab and its corresponding content
  function activateTab(index) {
    mobileMenuTabs.forEach((menuTab) => {
      menuTab.classList.remove("active");
    });
    mobileMenuTabs[index].classList.add("active");

    mobileMenuContents.forEach((menuContent) => {
      menuContent.classList.remove("active");
    });
    mobileMenuContents[index].classList.add("active");

    setTabLine(index); // Set the tab line for the newly active tab
  }

  // Add event listeners to each tab
  mobileMenuTabs.forEach((menuTab, index) => {
    menuTab.addEventListener("click", () => {
      activateTab(index);
    });
  });

  // Initialize tabs on page load
  initializeTabs();
});
