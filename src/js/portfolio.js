// === CONSTANTS AND DATA ===
const projectsArray = [
  {
    title: "Norway fun facts Quiz",
    href: "https://sbraende-quiz.netlify.app/quiz",
    imagePath:
      "../assets/images/blogposts/norway-quiz/norway-quiz-thumbnail.webp",
  },
  {
    title: "Components Viewer",
    href: "https://sbraende-components.netlify.app/",
    imagePath:
      "../assets/images/blogposts/components-viewer/components-viewer-thumbnail.webp",
  },
  {
    title: "Stabæk Fotball - Design Clone",
    href: "https://stabak-football-clone.vercel.app/",
    imagePath:
      "../assets/images/blogposts/stabak-fotball/stabak-fotball-thumbnail.webp",
  },
  {
    title: "Beats Solo - Design Clone",
    href: "https://sbraende-beats-solo.netlify.app/",
    imagePath:
      "../assets/images/blogposts/beats-solo/beats-solo-thumbnail.webp",
  },
  {
    title: "J-Speech - Speech Assistant",
    href: "https://j-speech.netlify.app/src/html/favorites.html",
    imagePath: "../assets/images/blogposts/j-speech/j-speech-thumbnail.webp",
  },
  {
    title: "2048 - Design Clone",
    href: "https://sbraende-2048-clone.netlify.app/",
    imagePath: "../assets/images/blogposts/2048/2048-thumbnail.webp",
  },
];

// === DOM SELECTORS ===
const headerElement = document.querySelector(".header");
const toggleHeaderButton = document.querySelector(
  ".mobile-header__menu-button"
);
const portfolioGridContainer = document.querySelector(
  ".portfolio__grid-container"
);

// === CORE LOGIC FUNCTIONS ===
const toggleHeader = () => {
  headerElement.classList.toggle("header--active");
};

const renderGrid = (projectsArray) => {
  projectsArray.forEach((project) => {
    // CREATE BLOGPOST DOM ELEMENTS
    const portfolioGridItemLink = document.createElement("a");
    const portfolioGridItemImage = document.createElement("img");
    const portfolioGridItemTitle = document.createElement("p");

    // APPEND ELEMENTS
    portfolioGridContainer.append(portfolioGridItemLink);
    portfolioGridItemLink.append(portfolioGridItemImage);
    portfolioGridItemLink.append(portfolioGridItemTitle);

    // ADD CLASS TO ELEMENT
    portfolioGridItemLink.classList.add("portfolio__grid-item");

    // ADD CONTENT TO ELEMNTS
    portfolioGridItemLink.href = project.href;
    portfolioGridItemLink.target = "_blank";
    portfolioGridItemImage.src = project.imagePath;
    portfolioGridItemImage.alt = `Project image for ${project.title}`;
    portfolioGridItemTitle.textContent = project.title;
  });
};

// === EVENT LISTENERS ===
toggleHeaderButton.addEventListener("click", () => toggleHeader());

// === INITIALIZATION ===
document.addEventListener("DOMContentLoaded", () => {
  renderGrid(projectsArray);
});
