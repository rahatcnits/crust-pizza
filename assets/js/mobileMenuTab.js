// mobile menu items tab
const mobileMenuTabs = document.querySelectorAll(".tab_btn");
const mobileMenuContents = document.querySelectorAll(".tab_content");

// Function to set the initial active tab and content
function initializeTabs() {
  mobileMenuTabs.forEach((menuTab, index) => {
    if (menuTab.classList.contains("active")) {
      activateTab(index);
    }
  });
}

// Function to activate a specific tab and its corresponding content
function activateTab(index) {
  mobileMenuTabs.forEach((menuTab) => {
    menuTab.classList.remove("active");
  });
  mobileMenuTabs[index].classList.add("active");

  let tabLine = document.querySelector(".tab_line");
  tabLine.style.width = mobileMenuTabs[index].offsetWidth + "px";
  tabLine.style.left = mobileMenuTabs[index].offsetLeft + "px";

  mobileMenuContents.forEach((menuContent) => {
    menuContent.classList.remove("active");
  });
  mobileMenuContents[index].classList.add("active");
}

// Add event listeners to each tab
mobileMenuTabs.forEach((menuTab, index) => {
  menuTab.addEventListener("click", () => {
    activateTab(index);
  });
});

// Initialize tabs on page load
initializeTabs();
