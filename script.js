const statusMessage = document.querySelector("#status-message");
const links = document.querySelectorAll("[data-status]");
const defaultStatus = "3 object(s)";

const readmeWindow = document.querySelector("#readme-window");
const openReadmeButton = document.querySelector("#open-readme");
const closeReadmeButton = document.querySelector("#close-readme");
const readmeDocument = document.querySelector(".notepad-document");

let previouslyFocusedElement = null;

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    statusMessage.textContent = link.dataset.status;
  });

  link.addEventListener("focus", () => {
    statusMessage.textContent = link.dataset.status;
  });

  link.addEventListener("mouseleave", () => {
    statusMessage.textContent = defaultStatus;
  });

  link.addEventListener("blur", () => {
    statusMessage.textContent = defaultStatus;
  });
});

function openReadme() {
  previouslyFocusedElement = document.activeElement;
  readmeWindow.classList.remove("hidden");
  document.body.classList.add("dialog-open");
  readmeDocument.focus();
}

function closeReadme() {
  readmeWindow.classList.add("hidden");
  document.body.classList.remove("dialog-open");

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
}

openReadmeButton.addEventListener("click", openReadme);
closeReadmeButton.addEventListener("click", closeReadme);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !readmeWindow.classList.contains("hidden")) {
    closeReadme();
  }
});
