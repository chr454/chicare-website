const popup = document.getElementById("subscribe-popup");
const closeBtn = document.querySelector(".close-popup");

function showPopup() {
  popup.style.display = "block";
}

function hidePopup() {
  popup.style.display = "none";
}

setTimeout(showPopup, 12000);

closeBtn.addEventListener("click", hidePopup);

window.addEventListener("click", function (event) {
  if (event.target === popup) {
    hidePopup();
  }
});
