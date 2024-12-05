// BLOGPOSTS KEY DATA ARRAY
const blogPostsArray = [
  {
    title: "Design Clone - Stabæk Fotball",
    date: new Date(2024, 11, 26),
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

// GENERAL FUNCTIONS
document.addEventListener("DOMContentLoaded", () =>
  renderBlogPosts(blogPostsArray)
);

// EVENT LISTENERS:
toggleHeaderButton.addEventListener("click", () => toggleHeader());
sortSelect.addEventListener("change", (event) =>
  sortBlogPosts(event, blogPostsArray)
);
searchInput.addEventListener("input", () => searchBlogs(blogPostsArray));

// FUNTIONS
const toggleHeader = () => headerElement.classList.toggle("header--active");

// SORT BLOGPOST FUNCTION
const sortBlogPosts = (event, blogPostsArray) => {
  // Clear rendered blogposts.
  blogPostsElement.textContent = "";

  // Based on userOption, returns sorted array:
  let sortedArray;
  if (event.target.value === "newest-first") {
    sortedArray = blogPostsArray.sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    );
  } else if (event.target.value === "oldest-first") {
    sortedArray = blogPostsArray.sort(
      (a, b) => a.date.getTime() - b.date.getTime()
    );
  } else if (event.target.value === "shortest-first") {
    sortedArray = blogPostsArray.sort(
      (a, b) => a.readLengthMin - b.readLengthMin
    );
  } else if (event.target.value === "longest-first") {
    sortedArray = blogPostsArray.sort(
      (a, b) => b.readLengthMin - a.readLengthMin
    );
  } else if (event.target.value === "most-liked") {
    // TODO: Probably want to fix this blogPostArray properly. Function for updateing Array?
    // Store whole array in local-storage for easy access to all attributes?
    blogPostsArray.forEach((blogPost) => {
      console.log(Number(blogPost.isLiked));
      console.log(JSON.parse(localStorage.getItem("likedPosts")));
    });
    sortedArray = blogPostsArray.sort((a, b) => b.isLiked - a.isLiked);
  }
  renderBlogPosts(sortedArray);
};

// SEARCH FUNCTION
const searchBlogs = (blogPostsArray) => {
  // Clear rendered blogposts.
  blogPostsElement.textContent = "";

  // Create new filteredArray based on userInput and blogPost titles.
  let filteredArray = blogPostsArray.filter((e, index) => {
    return blogPostsArray[index].title
      .toLowerCase()
      .includes(searchInput.value.toLowerCase());
  });

  // Render blogPosts with filteredArray.
  renderBlogPosts(filteredArray);
};

// INIT "LIKEDPOSTS"
const initLiked = () => {
  let likedPost = {};
  blogPostsArray.forEach((blogpost) => {
    // { blogpostID: { isLiked: true/false } }
    likedPost[blogpost.id] = { isLiked: false };
  });
  // Create local storage for newly created likedPost object
  localStorage.setItem("likedPosts", JSON.stringify(likedPost));
  return likedPost;
};
let likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || initLiked();

// LIKE POST FUNCTION
const likeBlogPost = (e) => {
  e.currentTarget.classList.toggle("blog-posts__heart--active");
  // Get blogpost ID of current clicked heart.
  const blogPostId = e.target.closest(".blog-posts__container");
  if (e.currentTarget.classList.contains("blog-posts__heart--active")) {
    // Set isLiked of this current blogpost to true.
    likedPosts[blogPostId.dataset.id].isLiked = true;
    e.target.src = "../assets/icons/general/heart-solid.svg";
  } else {
    // Set isLiked of this current blogpost to false.
    likedPosts[blogPostId.dataset.id].isLiked = false;
    e.target.src = "../assets/icons/general/heart.svg";
  }
  // Update likedPosts value on localServer.
  localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
};

// CREATE BLOGPOSTS
const renderBlogPosts = (blogPostArray) => {
  blogPostArray.forEach((blogPost) => {
    // CREATE BLOG DOM ELEMENTS
    const blogPostContainer = document.createElement("li");
    const blogPostContent = document.createElement("div");
    const blogPostContentAImage = document.createElement("a");
    const blogPostImage = document.createElement("img");
    const blogPostContentATitle = document.createElement("a");
    const blogPostTitle = document.createElement("h3");
    const blogPostDescription = document.createElement("p");
    const blogPostTools = document.createElement("div");
    const blogPostHeartButton = document.createElement("button");
    const blogPostHeartImage = document.createElement("img");
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
    blogPostTools.append(blogPostHeartButton, blogPostShareButton);
    blogPostHeartButton.append(blogPostHeartImage);
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
    blogPostHeartButton.classList.add("blog-posts__heart");
    blogPostShareButton.classList.add("blog-posts__share");

    // ADD DATA TO ELEMENT
    blogPostContainer.dataset.id = blogPost.id;

    // GET LOCALSTORAGE DATA FOR LIKED
    // if blogpost has been liked, render heart solid...
    if (likedPosts[blogPost.id].isLiked) {
      blogPostHeartButton.classList.add("blog-posts__heart--active");
      blogPostHeartImage.src = "../assets/icons/general/heart-solid.svg";
    } else {
      blogPostHeartImage.src = "../assets/icons/general/heart.svg";
    }

    // ADD EVENTLISTENERS TO ELEMENT
    blogPostHeartButton.addEventListener("click", (e) => likeBlogPost(e));
  });
};
