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

// counter
let counterValue = 1;

function increment() {
  counterValue++;
  updateCounter();
}

function decrement() {
  if (counterValue > 1) {
    counterValue--;
    updateCounter();
  }
}

function updateCounter() {
  document.getElementById("counter").innerText = counterValue;
}

/// Cart Notification
const cartNotification = document.querySelector(".cart_notification");
const cartNotificationCloseBtn = document.querySelector(
  ".close_cart_notification"
);

cartNotificationCloseBtn.addEventListener("click", () => {
  cartNotification.classList.remove("active");
});
