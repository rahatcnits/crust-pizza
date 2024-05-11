const productQtyDecrement = document.querySelector(".product_qty_decrement");
// counter
let counterValue = 1;

function increment() {
  counterValue++;
  updateCounter();
  productQtyDecrement.classList.add("active");
}

function decrement() {
  if (counterValue > 1) {
    counterValue--;
    updateCounter();
  }
  if (counterValue === 1) {
    productQtyDecrement.classList.remove("active");
  }
}

function updateCounter() {
  document.getElementById("counter").innerText = counterValue;
}

// modal product counter
let productCounterValue = 1;

function productIncrement() {
  productCounterValue++;
  productUpdateCounter();
}

function productDecrement() {
  if (productCounterValue > 1) {
    productCounterValue--;
    productUpdateCounter();
  }
}

function productUpdateCounter() {
  document.querySelector(".modal_order_counter_val").innerText =
    productCounterValue;
}

// sauces counter 1
let saucesCounterValue1 = 0;

function saucesIncrement1() {
  saucesCounterValue1++;
  saucesUpdateCounter1();
}

function saucesDecrement1() {
  if (saucesCounterValue1 > 0) {
    saucesCounterValue1--;
    saucesUpdateCounter1();
  }
}

function saucesUpdateCounter1() {
  document.getElementById("saucesCounter1").innerText = saucesCounterValue1;
}

// sauces counter 2
let saucesCounterValue2 = 0;

function saucesIncrement2() {
  saucesCounterValue2++;
  saucesUpdateCounter2();
}

function saucesDecrement2() {
  if (saucesCounterValue2 > 0) {
    saucesCounterValue2--;
    saucesUpdateCounter2();
  }
}

function saucesUpdateCounter2() {
  document.getElementById("saucesCounterValue2").innerText =
    saucesCounterValue2;
}

// sauces counter 3
let saucesCounterValue3 = 0;

function saucesIncrement3() {
  saucesCounterValue3++;
  saucesUpdateCounter3();
}

function saucesDecrement3() {
  if (saucesCounterValue3 > 0) {
    saucesCounterValue3--;
    saucesUpdateCounter3();
  }
}

function saucesUpdateCounter3() {
  document.getElementById("saucesCounterValue3").innerText =
    saucesCounterValue3;
}

// sauces counter 4
let saucesCounterValue4 = 0;

function saucesIncrement4() {
  saucesCounterValue4++;
  saucesUpdateCounter4();
}

function saucesDecrement4() {
  if (saucesCounterValue4 > 0) {
    saucesCounterValue4--;
    saucesUpdateCounter4();
  }
}

function saucesUpdateCounter4() {
  document.getElementById("saucesCounterValue4").innerText =
    saucesCounterValue4;
}

// essential counter 1
let essentialCounterValue1 = 0;

function essentialIncrement1() {
  essentialCounterValue1++;
  essentialUpdateCounter1();
}

function essentialDecrement1() {
  if (essentialCounterValue1 > 0) {
    essentialCounterValue1--;
    essentialUpdateCounter1();
  }
}

function essentialUpdateCounter1() {
  document.getElementById("essentialCounter1").innerText =
    essentialCounterValue1;
}

// essential counter 2
let essentialCounterValue2 = 0;

function essentialIncrement2() {
  essentialCounterValue2++;
  essentialUpdateCounter2();
}

function essentialDecrement2() {
  if (essentialCounterValue2 > 0) {
    essentialCounterValue2--;
    essentialUpdateCounter2();
  }
}

function essentialUpdateCounter2() {
  document.getElementById("essentialCounter2").innerText =
    essentialCounterValue2;
}

// essential counter 3
let essentialCounterValue3 = 0;

function essentialIncrement3() {
  essentialCounterValue3++;
  essentialUpdateCounter3();
}

function essentialDecrement3() {
  if (essentialCounterValue3 > 0) {
    essentialCounterValue3--;
    essentialUpdateCounter3();
  }
}

function essentialUpdateCounter3() {
  document.getElementById("essentialCounter3").innerText =
    essentialCounterValue3;
}
