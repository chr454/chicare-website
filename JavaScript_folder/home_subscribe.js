// Popup show/hide logic
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

// Optional: close when clicking outside popup content
window.addEventListener("click", function (event) {
  const popupContent = document.querySelector(".popup-content");
  if (event.target === popup && !popupContent.contains(event.target)) {
    hidePopup();
  }
});

// ✅ Brevo subscription form handling
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sib-form");
  const successMsg = document.getElementById("success-message");
  const errorMsg = document.getElementById("error-message");

  if (form) {
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
          return response.json().then(data => {
            throw new Error(data.message || "Subscription failed.");
          });
        }
      })
      .catch(() => {
        errorMsg.style.display = "block";
      });
    });
  }
});
