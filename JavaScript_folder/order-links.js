document.addEventListener("DOMContentLoaded", function () {
  const phone = "2349019415084";
  const baseURL = `https://wa.me/${phone}?text=`;
  
  const buttons = document.querySelectorAll(".order-now");

  buttons.forEach(button => {
    const productCard = button.closest(".product-card");
    const productName = productCard.querySelector("h3")?.innerText.trim();

    const message = `Hello! I'm interested in purchasing your product: ${productName}. Kindly provide more details. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const fullLink = `${baseURL}${encodedMessage}`;

    button.setAttribute("href", fullLink);
    button.setAttribute("target", "_blank"); // opens WhatsApp in new tab
  });
});
