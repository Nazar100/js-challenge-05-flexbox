const pannels = document.querySelectorAll(".panel");
console.log(pannels);

function toggleClass() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("active");
  }
}

pannels.forEach((pannel) => {
  pannel.addEventListener("click", toggleClass);
});
pannels.forEach((pannel) => {
  pannel.addEventListener("transitionend", toggleActive);
});
