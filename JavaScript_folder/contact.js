
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status.innerText = "✅ Message sent successfully!";
        status.style.color = "green";
        form.reset();
      } else {
        status.innerText = "❌ Oops! There was a problem submitting your message.";
        status.style.color = "red";
      }
    } catch (error) {
      status.innerText = "❌ Network error. Please try again later.";
      status.style.color = "red";
    }
  });
});

