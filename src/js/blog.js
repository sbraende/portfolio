// === CONSTANTS AND DATA ===
const blogPostsArray = [
  {
    title: "Norway fun facts Quiz",
    date: new Date(2024, 11, 10),
    thumbnail:
      "../assets/images/blogposts/norway-quiz/norway-quiz-thumbnail.webp",
    description:
      "Interactive quiz about Norwegian culture, built with responsive HTML, CSS, and JS.",
    path: "../blogposts/norway-quiz.html",
    tags: "Design HTML CSS JavaScript Assignment",
    readLengthMin: 6,
    isLiked: false,
    id: "norway-quiz",
  },
  {
    title: "Components Viewer",
    date: new Date(2024, 11, 3),
    thumbnail:
      "../assets/images/blogposts/components-viewer/components-viewer-thumbnail.webp",
    description:
      "Showcase of 8 UI components and states, built with responsive HTML, CSS, and JS.",
    path: "../blogposts/components-viewer.html",
    tags: "Design HTML CSS JavaScript Assignment",
    readLengthMin: 3,
    isLiked: false,
    id: "components-viewer",
  },
  {
    title: "Stabæk Fotball - Design Clone",
    date: new Date(2024, 10, 15),
    thumbnail:
      "../assets/images/blogposts/stabak-fotball/stabak-fotball-thumbnail.webp",
    description:
      "Responsive design clone of the Stabæk Fotball site, built with HTML & CSS.",
    path: "../blogposts/stabak-fotball.html",
    tags: "Design HTML CSS Assignment",
    readLengthMin: 5,
    isLiked: false,
    id: "stabak",
  },
  {
    title: "Beats Solo - Design Clone",
    date: new Date(2024, 10, 8),
    thumbnail:
      "../assets/images/blogposts/beats-solo/beats-solo-thumbnail.webp",
    description:
      "Responsive design clone of the Beats Solo 4 product page, built with HTML & CSS.",
    path: "../blogposts/beats-solo.html",
    tags: "Design HTML CSS Assignment",
    readLengthMin: 5,
    isLiked: false,
    id: "beats-solo",
  },
  {
    title: "J-Speech - Speech Assistant",
    date: new Date(2024, 9, 11),
    thumbnail: "../assets/images/blogposts/j-speech/j-speech-thumbnail.webp",
    description:
      "J Speech Assistant: A Norwegian PWA soundboard designed for tablets to aid communication effectively.",
    path: "../blogposts/j-speech.html",
    tags: "PersonalProject HTML CSS JS Vite PWA",
    readLengthMin: 10,
    isLiked: false,
    id: "j-speech",
  },
  {
    title: "2048 - Design Clone",
    date: new Date(2024, 9, 4),
    thumbnail: "../assets/images/blogposts/2048/2048-thumbnail.webp",
    description:
      "Responsive 2048 game clone, styled with HTML & CSS. Inspired by Gabriele Cirulli's original design.",
    path: "../blogposts/game-2048.html",
    tags: "Design HTML CSS Assignment",
    readLengthMin: 2,
    isLiked: false,
    id: "game2048",
  },
];

// === DOM SELECTORS ===
const toggleHeaderButton = document.querySelector(
  ".mobile-header__menu-button"
);
const headerElement = document.querySelector(".header");
const sortSelect = document.querySelector(".tools__sort-select");
const searchInput = document.querySelector(".tools__search-input");
const blogPostsElement = document.querySelector(".blog-posts");

// === UTILITY FUNCTIONS ===
// DATE
const formatDate = (date) => {
  const option = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  // Convert date string string to Date object, then format it.
  return new Date(date).toLocaleString("no-NO", option);
};

// LOCALSTORAGE
const initBlogPosts = () =>
  JSON.parse(localStorage.getItem("blogPostsArray")) ||
  (localStorage.setItem("blogPostsArray", JSON.stringify(blogPostsArray)),
  blogPostsArray);

const getBlogPosts = () => JSON.parse(localStorage.getItem("blogPostsArray"));

const storeBlogPosts = (blogPosts) =>
  localStorage.setItem("blogPostsArray", JSON.stringify(blogPosts));

// === CORE LOGIC FUNCTIONS ===
const toggleHeader = () => {
  headerElement.classList.toggle("header--active");
};

const sortBlogPosts = (e) => {
  const blogPosts = getBlogPosts();

  // Clear rendered blogposts.
  blogPostsElement.textContent = "";

  let sortedArray;
  if (e.target.value === "newest-first") {
    // Date.parse is used convert dateString into milliseconds.
    sortedArray = blogPosts.sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date)
    );
  } else if (e.target.value === "oldest-first") {
    sortedArray = blogPosts.sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  } else if (e.target.value === "shortest-first") {
    sortedArray = blogPosts.sort((a, b) => a.readLengthMin - b.readLengthMin);
  } else if (e.target.value === "longest-first") {
    sortedArray = blogPosts.sort((a, b) => b.readLengthMin - a.readLengthMin);
  } else if (e.target.value === "most-liked") {
    sortedArray = blogPosts.sort((a, b) => {
      return b.isLiked - a.isLiked;
    });
  }
  renderBlogPosts(sortedArray);
};

const searchBlogs = (blogPostsArray) => {
  // Clear rendered blogposts
  blogPostsElement.textContent = "";

  // Create new filteredArray based on userInput and blogPost titles
  let filteredArray = blogPostsArray.filter((e, index) => {
    return blogPostsArray[index].title
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());
  });

  // Render blogPosts with filteredArray
  renderBlogPosts(filteredArray);
};

const likeBlogPost = (e) => {
  const blogPosts = getBlogPosts();

  // Get id for currentBlogPost
  const currentBlogPostsId = e.currentTarget.closest(".blog-posts__container")
    .dataset.id;

  e.currentTarget.classList.toggle("blog-posts__heart--active");

  if (e.currentTarget.classList.contains("blog-posts__heart--active")) {
    // Toggle isLiked and liked Image
    // Index of blogPost (array) is found using matching ids
    blogPosts[
      blogPosts.findIndex((blogpost) => blogpost.id === currentBlogPostsId)
    ].isLiked = true;
    e.target.src = "../assets/icons/general/heart-solid.svg";
  } else {
    blogPosts[
      blogPosts.findIndex((blogpost) => blogpost.id === currentBlogPostsId)
    ].isLiked = false;
    e.target.src = "../assets/icons/general/heart.svg";
  }

  // Update localserver with updated isLiked value
  storeBlogPosts(blogPosts);
};

const shareBlogPost = (e, blogPost) => {
  // TODO: Implement feature
};

// RENDER BLOGPOSTS
const renderBlogPosts = (blogPosts) => {
  blogPosts.forEach((blogPost) => {
    // CREATE BLOGPOST DOM ELEMENTS
    const blogPostContainer = document.createElement("li");
    const blogPostContent = document.createElement("div");
    const blogPostContentAImage = document.createElement("a");
    const blogPostImage = document.createElement("img");
    const blogPostContentATitle = document.createElement("a");
    const blogPostTitle = document.createElement("h3");
    const blogPostDescription = document.createElement("p");

    const blogPostDetailsContainer = document.createElement("div");

    const blogPostsDetailsSectionLeft = document.createElement("section");
    const blogPostDateContainer = document.createElement("div");
    const blogPostDateImage = document.createElement("img");
    const blogPostDateText = document.createElement("p");
    const blogPostDurationContainer = document.createElement("div");
    const blogPostDurationImage = document.createElement("img");
    const blogPostDurationText = document.createElement("p");

    const blogPostsDetailsSectionRight = document.createElement("section");
    const blogPostLikeButton = document.createElement("button");
    const blogPostLikeImage = document.createElement("img");
    const blogPostShareButton = document.createElement("button");
    const blogPostShareImage = document.createElement("img");

    // APPEND ELEMENTS
    blogPostsElement.append(blogPostContainer);
    blogPostContainer.append(blogPostContent);
    blogPostContent.append(
      blogPostContentAImage,
      blogPostContentATitle,
      blogPostDescription,
      blogPostDetailsContainer
    );
    blogPostContentAImage.append(blogPostImage);
    blogPostContentATitle.append(blogPostTitle);

    blogPostDetailsContainer.append(
      blogPostsDetailsSectionLeft,
      blogPostsDetailsSectionRight
    );

    blogPostsDetailsSectionLeft.append(
      blogPostDateContainer,
      blogPostDurationContainer
    );
    blogPostDateContainer.append(blogPostDateImage, blogPostDateText);
    blogPostsDetailsSectionRight.append(
      blogPostLikeButton,
      blogPostShareButton
    );
    blogPostDurationContainer.append(
      blogPostDurationImage,
      blogPostDurationText
    );
    blogPostLikeButton.append(blogPostLikeImage);
    blogPostShareButton.append(blogPostShareImage);

    // ADD CLASS TO ELEMENT
    blogPostContainer.classList.add("blog-posts__container");
    blogPostContent.classList.add("blog-posts__content");
    blogPostImage.classList.add("blog-posts__image");
    blogPostTitle.classList.add("blog-posts__title");
    blogPostDescription.classList.add("blog-posts__description");
    blogPostDetailsContainer.classList.add("blog-posts__details-container");

    blogPostsDetailsSectionLeft.classList.add(
      "blog-posts__details-section-left"
    );
    blogPostDateContainer.classList.add("blog-posts__date-container");
    blogPostDateImage.classList.add("blog-posts__date-image");
    blogPostDateText.classList.add("blog-post__date-text");

    blogPostDurationContainer.classList.add("blog-posts__duration-container");
    blogPostDurationImage.classList.add("blog-posts__duration-image");
    blogPostDurationText.classList.add("blog-posts__duration-text");

    blogPostsDetailsSectionRight.classList.add(
      "blog-posts__details-section-right"
    );
    blogPostLikeButton.classList.add("blog-posts__heart");
    blogPostShareButton.classList.add("blog-posts__share");

    // ADD DATA TO ELEMENT
    blogPostContainer.dataset.id = blogPost.id;

    // ADD CONTENT TO ELEMENT
    blogPostContent.href = "#";
    blogPostContentAImage.href = blogPost.path;
    blogPostImage.src = blogPost.thumbnail;
    blogPostImage.alt = `Thumbnail for ${blogPost.title}`;
    blogPostContentATitle.href = blogPost.path;
    blogPostTitle.textContent = blogPost.title;
    blogPostDescription.textContent = blogPost.description;
    blogPostDateImage.src = "../assets/icons/general/calendar.svg";
    blogPostDateImage.alt = "Calendar symbol";
    blogPostDateText.textContent = formatDate(blogPost.date);
    blogPostDurationImage.src = "../assets/icons/general/clock.svg";
    blogPostDurationImage.alt = "Clock symbol";
    blogPostDurationText.textContent = `${blogPost.readLengthMin} min`;
    blogPostShareImage.src = "../assets/icons/general/share-android.svg";
    blogPostShareImage.alt = "Share symbol";

    // CHECK IF ISLIKED ON BLOGPOSTS. SET CORRECT CLASS AND IMAGE
    if (blogPost.isLiked) {
      blogPostLikeButton.classList.add("blog-posts__heart--active");
      blogPostLikeImage.src = "../assets/icons/general/heart-solid.svg";
    } else {
      blogPostLikeImage.src = "../assets/icons/general/heart.svg";
    }

    // BLOGPOST EVENT LISTENERS
    blogPostLikeButton.addEventListener("click", (e) => likeBlogPost(e));
    blogPostShareButton.addEventListener("click", (e) =>
      shareBlogPost(e, blogPost)
    );
  });
};

// === EVENT LISTENERS ===
toggleHeaderButton.addEventListener("click", () => toggleHeader());
sortSelect.addEventListener("change", (e) => sortBlogPosts(e));
searchInput.addEventListener("input", () => searchBlogs(blogPostsArray));

// === INITIALIZATION ===
document.addEventListener("DOMContentLoaded", () => {
  renderBlogPosts(initBlogPosts());
});
