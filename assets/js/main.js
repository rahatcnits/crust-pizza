const tabsBox = document.querySelector(".tabs-box"),
  allTabs = tabsBox.querySelectorAll(".tab"),
  arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
};

const checkOverflow = () => {
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[1].parentElement.style.display = maxScrollableWidth <= 0 ? "none" : "flex";
};

// Initial check on page load
document.addEventListener("DOMContentLoaded", checkOverflow);
// Check on window resize
window.addEventListener("resize", checkOverflow);

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 340 from tabsBox scrollLeft else add
    let scrollWidth = (tabsBox.scrollLeft += icon.id === "left" ? -340 : 340);
    handleIcons(scrollWidth);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons(tabsBox.scrollLeft);
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// tab content show
const menuContents = document.querySelectorAll(".tab_content");

allTabs.forEach((menuTab, index) => {
  menuTab.addEventListener("click", (e) => {
    allTabs.forEach((menuTab) => {
      menuTab.classList.remove("active");
    });
    menuTab.classList.add("active");

    menuContents.forEach((menuContent) => {
      menuContent.classList.remove("active");
    });
    menuContents[index].classList.add("active");
  });
});

let sections = document.querySelectorAll(".products");
let navLinks = document.querySelectorAll(".tab a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.parentElement.classList.remove("active");
        let tabAElement = document.querySelector(".tab a[href*=" + id + "]");
        tabAElement.parentElement.classList.add("active");
      });
    }
  });
};


/// product size
// add fund card
function checkChange1(clickedCheckbox) {
  const checkboxes = document.querySelectorAll('input[name="plan"]');

  if (clickedCheckbox.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
}

// crust select

// var cards = document.querySelectorAll(".card");
const cards = document.querySelectorAll(".product_crust_details");
const crustSelectBtns = document.querySelectorAll(".add_btn");

// Add click event listener to each card
cards.forEach(function (card, index) {
  card.addEventListener("click", function () {
    let cardActive = card.classList.toggle("active");

    let crustSelectCardBtn = crustSelectBtns[index];
    if (cardActive) {
      crustSelectCardBtn.innerText = "Added"; // Change button text to "Added"
    } else {
      crustSelectCardBtn.innerHTML = `<svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1.5V16.5M16.5 9H1.5"
            stroke="black"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Add</span>`; // Revert button content to original
    }
  });
});
