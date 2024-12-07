// SELECT ELEMENTS FROM DOM
blogPostElement = document.querySelector(".blogpost");
blogPostTitle = document.querySelector(".blogpost-header__title-text");
blogPostTagList = document.querySelector(".blogpost-header__taglist");
blogPostDateText = document.querySelector(".blog-post__date-text");
blogPostDurationText = document.querySelector(".blog-posts__duration-text");
blogPostLikeImage = document.querySelector(".blog-posts__heart img");
blogPostShare = document.querySelector(".blog-posts__share");

// ON DOM CONTENT LOAD
document.addEventListener("DOMContentLoaded", () => renderDynamicElements());

// LOCALSTORAGE BLOGPOSTS FUNCTIONS
const initBlogPosts = () =>
  JSON.parse(localStorage.getItem("blogPostsArray")) ||
  (localStorage.setItem("blogPostsArray", JSON.stringify(blogPostsArray)),
  blogPostsArray);

const getBlogPosts = () => JSON.parse(localStorage.getItem("blogPostsArray"));

const getCurrentBlogPost = (blogposts) =>
  // Get current blogpost based on array.id and current blogPost.id.
  blogposts[
    blogposts.findIndex(
      (arrayBlogPost) => arrayBlogPost.id === blogPostElement.dataset.id
    )
  ];

// CONTENT FORMATIING FUNCTIONS
const formatTags = (tagsString) =>
  tagsString
    .split(" ")
    .map((tag) => `#${tag}`)
    .join(" ");

// RENDER PAGE
const renderDynamicElements = () => {
  // CREATE BLOGPOST HEADER ELEMENTS

  // GET DYNAMIC DATA
  const blogposts = getBlogPosts();
  const currentBlogPost = getCurrentBlogPost(blogposts);

  // SET CONTENT
  blogPostTitle.textContent = currentBlogPost.title;
  blogPostTagList.textContent = formatTags(currentBlogPost.tags);
};

// RENDER DYNAMIC ELEMENTS PAGE

// Render title, tags, date and duration, like and share from Array.

// Get array from local storage

// Get the right index based on blogpost id data attr.

// fill content

// Add event listener to like image
