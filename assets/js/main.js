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

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
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

// all modal hide
const cartModal = document.querySelector(".cart_modal");
const closeModal = document.querySelector(".close_modal");

closeModal.addEventListener("click", () => {
  cartModal.classList.remove("active");
});

// pickup modal hide
const pickupModal = document.querySelector(".pickup_modal");
const pickupModalClose = document.querySelector(".close_modal");

pickupModalClose.addEventListener("click", () => {
  pickupModal.classList.remove("active");
});

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

function checkChange2(clickedCheckbox) {
  const checkboxes = document.querySelectorAll('input[name="productGet"]');

  if (clickedCheckbox.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
}

function checkChange3(clickedCheckbox) {
  const checkboxes = document.querySelectorAll('input[name="productCrust"]');

  if (clickedCheckbox.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
}

function checkChange4(clickedCheckbox) {
  const checkboxes = document.querySelectorAll('input[name="crust"]');

  if (clickedCheckbox.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox !== clickedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
}

// crust select
document.addEventListener("DOMContentLoaded", function () {
  // Get all cards
  // var cards = document.querySelectorAll(".card");
  const cards = document.querySelectorAll(".product_crust_details");

  // Add click event listener to each card
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      // Check if the clicked card already has the active class
      var isActive = this.classList.contains("active");

      // Remove active class from all cards
      cards.forEach(function (card) {
        card.classList.remove("active");
      });

      // If the clicked card didn't have the active class, add it
      if (!isActive) {
        this.classList.add("active");
      }
    });
  });
});

/// Cart Notification
const cartNotification = document.querySelector(".cart_notification");
const cartNotificationCloseBtn = document.querySelector(
  ".close_cart_notification"
);

cartNotificationCloseBtn.addEventListener("click", () => {
  cartNotification.classList.remove("active");
});
