// Popup show/hide logic
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

// Close popup when clicking outside
window.addEventListener("click", function (event) {
  const popupContent = document.querySelector(".popup-content");
  if (event.target === popup && !popupContent.contains(event.target)) {
    hidePopup();
  }
});

// Brevo form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sib-form");
  const successMsg = document.getElementById("success-message");
  const errorMsg = document.getElementById("error-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    successMsg.style.display = "none";
    errorMsg.style.display = "none";

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        successMsg.style.display = "block";
      } else {
        errorMsg.style.display = "block";
      }
    })
    .catch(() => {
      errorMsg.style.display = "block";
    });
  });
});
