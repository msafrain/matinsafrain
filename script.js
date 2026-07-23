const statusMessage = document.querySelector("#status-message");
const links = document.querySelectorAll("[data-status]");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    statusMessage.textContent = link.dataset.status;
  });

  link.addEventListener("focus", () => {
    statusMessage.textContent = link.dataset.status;
  });

  link.addEventListener("mouseleave", () => {
    statusMessage.textContent = "2 object(s)";
  });

  link.addEventListener("blur", () => {
    statusMessage.textContent = "2 object(s)";
  });
});
