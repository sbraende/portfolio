// === DOM SELECTORS ===
const blogPostElement = document.querySelector(".blogpost");
const blogPostContentElement = document.querySelector(".blogpost-content");
const headerElement = document.querySelector(".header");
const toggleHeaderButton = document.querySelector(
  ".mobile-header__menu-button"
);

// === UTILITY FUNCTIONS ===
// LOCALSTORAGE
const getBlogPosts = () => JSON.parse(localStorage.getItem("blogPostsArray"));

const getCurrentBlogPost = (blogposts) =>
  // Get current blogpost based on array.id and current blogPost.id.
  blogposts[
    blogposts.findIndex(
      (arrayBlogPost) => arrayBlogPost.id === blogPostElement.dataset.id
    )
  ];

const storeBlogPosts = (blogPosts) =>
  localStorage.setItem("blogPostsArray", JSON.stringify(blogPosts));

// CREATE HTML ELEMENTS
const createHTMLElement = (tag, className, attributes = {}, parent = null) => {
  const element = document.createElement(tag);
  if (className) {
    // Multiple classes functionality
    const classNameArray = className.split(" ");
    if (classNameArray.length > 1) {
      classNameArray.forEach((className) => element.classList.add(className));
    } else {
      element.classList.add(className);
    }
  }

  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  if (parent) {
    parent.append(element);
  }

  return element;
};

// FORMAT (hash) TAGS
const formatTags = (tagsString) =>
  tagsString
    .split(" ")
    .map((tag) => `#${tag}`)
    .join(" ");

// DATE
const formatDate = (date) => {
  const option = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  // Convert date string string to Date object, then format it.
  return new Date(date).toLocaleString("en-GB", option);
};

// === CORE LOGIC FUNCTIONS ===
const toggleHeader = () => headerElement.classList.toggle("header--active");

const likeBlogPost = (e, currentBlogPost) => {
  // Get latest blogPosts from localstorage
  const blogPosts = getBlogPosts();

  e.currentTarget.classList.toggle("blog-posts__heart--active");

  if (e.currentTarget.classList.contains("blog-posts__heart--active")) {
    // Toggle isLiked and liked Image
    // Index of blogPost (array) is found using matching ids
    blogPosts[
      blogPosts.findIndex((blogpost) => blogpost.id === currentBlogPost.id)
    ].isLiked = true;
    e.target.src = "../assets/icons/general/heart-solid.svg";
  } else {
    blogPosts[
      blogPosts.findIndex((blogpost) => blogpost.id === currentBlogPost.id)
    ].isLiked = false;
    e.target.src = "../assets/icons/general/heart.svg";
  }

  // Update localserver with updated isLiked value
  storeBlogPosts(blogPosts);
};

const renderDynamicElements = () => {
  // BLOGPOST HEADER
  const blogPostHeader = createHTMLElement(
    "header",
    "blogpost-header",
    {},
    blogPostElement
  );

  const blogPostTitleContainer = createHTMLElement(
    "div",
    "blogpost-header__title-container",
    {},
    blogPostHeader
  );
  const blogPostTitleText = createHTMLElement(
    "h1",
    "blogpost-header__title-text page-title",
    {},
    blogPostTitleContainer
  );

  const blogPostTagList = createHTMLElement(
    "ul",
    "blogpost-header__taglist",
    {},
    blogPostHeader
  );

  // DETAILS SECTION
  const blogPostDetailsContainer = createHTMLElement(
    "div",
    "blog-posts__details-container",
    {},
    blogPostHeader
  );

  // DETAILS LEFT SECTION
  const blogPostsDetailsSectionLeft = createHTMLElement(
    "section",
    "blog-posts__details-section-left",
    {},
    blogPostDetailsContainer
  );
  const blogPostDateContainer = createHTMLElement(
    "div",
    "blog-posts__date-container",
    {},
    blogPostsDetailsSectionLeft
  );
  const blogPostDateImage = createHTMLElement(
    "img",
    "blog-posts__date-image",
    { src: "../assets/icons/general/calendar.svg", alt: "Calendar symbol" },
    blogPostDateContainer
  );
  const blogPostDateText = createHTMLElement(
    "p",
    "blog-post__date-text",
    {},
    blogPostDateContainer
  );

  const blogPostDurationContainer = createHTMLElement(
    "div",
    "blog-posts__duration-container",
    {},
    blogPostsDetailsSectionLeft
  );
  const blogPostDurationImage = createHTMLElement(
    "img",
    "blog-posts__duration-image",
    { src: "../assets/icons/general/clock.svg", alt: "Clock symbol" },
    blogPostDurationContainer
  );
  const blogPostDurationText = createHTMLElement(
    "p",
    "blog-posts__duration-text",
    {},
    blogPostDurationContainer
  );

  // DETAILS RIGHT SECTION
  const blogPostsDetailsSectionRight = createHTMLElement(
    "section",
    "blog-posts__details-section-right",
    {},
    blogPostDetailsContainer
  );
  const blogPostLikeButton = createHTMLElement(
    "button",
    "blog-posts__heart",
    {},
    blogPostsDetailsSectionRight
  );
  const blogPostLikeImage = createHTMLElement(
    "img",
    "",
    {
      src: "../assets/icons/general/heart.svg",
      alt: "Heart symbol",
    },
    blogPostLikeButton
  );
  const blogPostShareButton = createHTMLElement(
    "button",
    "blog-posts__share",
    {},
    blogPostsDetailsSectionRight
  );
  const blogPostShareImage = createHTMLElement(
    "img",
    "",
    { src: "../assets/icons/general/share-android.svg", alt: "Share symbol" },
    blogPostShareButton
  );

  // GET DYNAMIC DATA
  const blogposts = getBlogPosts();
  const currentBlogPost = getCurrentBlogPost(blogposts);

  // SET CONTENT
  document.title = `SEB--DEV: ${currentBlogPost.title}`;
  blogPostTitleText.textContent = currentBlogPost.title;
  // blogPostTagList.textContent = formatTags(currentBlogPost.tags);
  blogPostDateText.textContent = formatDate(currentBlogPost.date);
  blogPostDurationText.textContent = `${currentBlogPost.readLengthMin} min`;

  // CHECK IF ISLIKED ON BLOGPOSTS. SET CORRECT CLASS AND IMAGE
  if (currentBlogPost.isLiked) {
    blogPostLikeButton.classList.add("blog-posts__heart--active");
    blogPostLikeImage.src = "../assets/icons/general/heart-solid.svg";
  } else {
    blogPostLikeImage.src = "../assets/icons/general/heart.svg";
  }

  // ADD EVENT LISTNER TO HEART
  blogPostLikeButton.addEventListener("click", (e) =>
    likeBlogPost(e, currentBlogPost)
  );

  // ARTICLE RE-PARENTING
  blogPostElement.append(blogPostContentElement);
};

// === EVENT LISTENERS ===
toggleHeaderButton.addEventListener("click", () => toggleHeader());

// === INITIALIZATION ===
document.addEventListener("DOMContentLoaded", () => renderDynamicElements());
