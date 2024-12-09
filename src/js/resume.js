// === DOM SELECTORS ===
const headerElement = document.querySelector(".header");
const toggleHeaderButton = document.querySelector(
  ".mobile-header__menu-button"
);

// === CORE LOGIC FUNCTIONS ===
const toggleHeader = () => {
  headerElement.classList.toggle("header--active");
};

// === EVENT LISTENERS ===
toggleHeaderButton.addEventListener("click", () => toggleHeader());
