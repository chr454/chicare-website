const popup = document.getElementById("subscribe-popup");
const closeBtn = document.querySelector(".close-popup");

function showPopup() {
  popup.style.display = "flex";
}

function hidePopup() {
  popup.style.display = "none";
}

setTimeout(showPopup, 12000);

closeBtn.addEventListener("click", hidePopup);

window.addEventListener("click", function (event) {
  const popupContent = document.querySelector(".popup-content");
  if (event.target === popup && !popupContent.contains(event.target)) {
    hidePopup();
  }
});
