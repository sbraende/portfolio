// BLOGPOSTS KEY DATA ARRAY
const blogPostsArray = [
  {
    title: "Design Clone - Stabæk Fotball",
    date: new Date(2024, 11, 26),
    // date: new Date(2024, 11, 26).getTime(),
    thumbnail:
      "../assets/images/blogposts/stabak-fotball/stabak-fotball-thumbnail.webp",
    description:
      "I've been working on a responsive website dedicated to Stabæk Football fans! The goal is to provide an engaging platform to explore matches, stats, and team",
    path: "../blogposts/stabak-fotball.html",
    hashtags: "design HTML CSS assignment",
    readLengthMin: 5,
    isLiked: true,
    id: "stabak",
  },
  {
    title: "Design Clone - 2048",
    date: new Date(2024, 11, 21),
    thumbnail: "../assets/images/blogposts/2048/2048-thumbnail.webp",
    description:
      "This project is a design copy of the popular game 2048, originally created by Gabriele Cirulli. The game features a grid where players slide tiles of numbers to combine them, aiming to reach the 2048 tile.",
    path: "../blogposts/2048.html",
    hashtags: "design HTML CSS assignment",
    readLengthMin: 2,
    isLiked: false,
    id: "game2048",
  },
];

// SELECT ELEMENTS FROM DOM
const toggleHeaderButton = document.querySelector(
  ".main-header__toggle-button"
);
const headerElement = document.querySelector(".header");
const sortSelect = document.querySelector(".tools__sort-select");
const searchInput = document.querySelector(".tools__search-input");
const blogPostsElement = document.querySelector(".blog-posts");

// ON DOM CONTENT LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderBlogPosts(initBlogPosts());
});

// EVENT LISTENERS:
toggleHeaderButton.addEventListener("click", () => toggleHeader());
sortSelect.addEventListener("change", (e) => sortBlogPosts(e));
searchInput.addEventListener("input", () => searchBlogs(blogPostsArray));

// FUNCTIONS:

// LOCALSTORAGE BLOGPOSTS FUNCTIONS
const initBlogPosts = () =>
  JSON.parse(localStorage.getItem("blogPostsArray")) ||
  (localStorage.setItem("blogPostsArray", JSON.stringify(blogPostsArray)),
  blogPostsArray);

const getBlogPosts = () => JSON.parse(localStorage.getItem("blogPostsArray"));

const storeBlogPosts = (blogPosts) =>
  localStorage.setItem("blogPostsArray", JSON.stringify(blogPosts));

// TOGGLE HEADER
const toggleHeader = () => headerElement.classList.toggle("header--active");

// SORT BLOGPOST FUNCTION
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
  }

  // else if (e.target.value === "most-liked") {
  //   sortedArray = blogPosts;
  // }
  renderBlogPosts(sortedArray);
};

// SEARCH FUNCTION
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

// LIKE POST FUNCTION
const likeBlogPost = (e) => {
  // Get latest blogPosts from localstorage
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

// RENDER BLOGPOSTS
const renderBlogPosts = (blogPosts) => {
  blogPosts.forEach((blogPost) => {
    // CREATE BLOG DOM ELEMENTS
    const blogPostContainer = document.createElement("li");
    const blogPostContent = document.createElement("div");
    const blogPostContentAImage = document.createElement("a");
    const blogPostImage = document.createElement("img");
    const blogPostContentATitle = document.createElement("a");
    const blogPostTitle = document.createElement("h3");
    const blogPostDescription = document.createElement("p");
    const blogPostTools = document.createElement("div");
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
      blogPostDescription
    );
    blogPostContentAImage.append(blogPostImage);
    blogPostContentATitle.append(blogPostTitle);
    blogPostContainer.append(blogPostTools);
    blogPostTools.append(blogPostLikeButton, blogPostShareButton);
    blogPostLikeButton.append(blogPostLikeImage);
    blogPostShareButton.append(blogPostShareImage);

    // ADD CONTENT TO ELEMENT
    blogPostContent.href = "#";
    blogPostContentAImage.href = blogPost.path;
    blogPostImage.src = blogPost.thumbnail;
    blogPostContentATitle.href = blogPost.path;
    blogPostTitle.textContent = blogPost.title;
    blogPostDescription.textContent = blogPost.description;
    blogPostShareImage.src = "../assets/icons/general/share-android.svg";

    // ADD CLASS TO ELEMENT
    blogPostContainer.classList.add("blog-posts__container");
    blogPostContent.classList.add("blog-posts__content");
    blogPostImage.classList.add("blog-posts__image");
    blogPostTitle.classList.add("blog-posts__title");
    blogPostDescription.classList.add("blog-posts__description");
    blogPostTools.classList.add("blog-posts__tools");
    blogPostLikeButton.classList.add("blog-posts__heart");
    blogPostShareButton.classList.add("blog-posts__share");

    // ADD DATA TO ELEMENT
    blogPostContainer.dataset.id = blogPost.id;

    // CHECK IF ISLIKED ON BLOGPOSTS. SET CORRECT CLASS AND IMAGE
    if (blogPost.isLiked) {
      blogPostLikeButton.classList.add("blog-posts__heart--active");
      blogPostLikeImage.src = "../assets/icons/general/heart-solid.svg";
    } else {
      blogPostLikeImage.src = "../assets/icons/general/heart.svg";
    }

    // ADD EVENT LISTNER TO HEART
    blogPostLikeButton.addEventListener("click", (e) => likeBlogPost(e));
  });
};
