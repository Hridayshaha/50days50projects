const steps = document.querySelectorAll(".step");
const active = document.querySelectorAll(".active");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("bar");

let count = 0;

function widthUpdate(count) {
  let width = ((count + 1) / steps.length) * 100 - 5;
  progress.style.width = width + "%";
}
function addClasslist(count, className) {
  steps[count].classList.add(className);
}
function removeClasslist(count, className) {
  steps[count].classList.remove(className);
}
next.addEventListener("click", () => {
  if (steps.length - 1 > count) {
    count += 1;
  }
  // Width Increase / Decrease Function
  widthUpdate(count);
  // Class Add Function
  addClasslist(count, "active");
  if (count > 0) {
    prev.disabled = false;
  }

  if (count === steps.length - 1) {
    next.setAttribute("disabled", true);
  }
});

prev.addEventListener("click", () => {
  // Class Remove Function
  removeClasslist(count, "active");
  if (count > 0) {
    count = count - 1;
  }

  // Width Increase / Decrease Function
  widthUpdate(count);

  if (count === 0) {
    prev.disabled = true;
    next.disabled = false;
  }
});
