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
    readLengthMin: "5",
  },
  {
    title: "Design Clone - 2048",
    date: new Date(2024, 11, 21),
    thumbnail: "../assets/images/blogposts/2048/2048-thumbnail.webp",
    description:
      "This project is a design copy of the popular game 2048, originally created by Gabriele Cirulli. The game features a grid where players slide tiles of numbers to combine them, aiming to reach the 2048 tile.",
    path: "../blogposts/2048.html",
    hashtags: "design HTML CSS assignment",
    readLengthMin: "2",
  },
];

// SELECT ELEMENTS FROM DOM
const sortSelect = document.querySelector(".tools__sort-select");
const searchInput = document.querySelector(".tools__search-input");
const blogPostsElement = document.querySelector(".blog-posts");
// TODO: Implement sort toggle
// TODO: Implement toggle visbility Search

// GENERAL FUNCTIONS
document.addEventListener("DOMContentLoaded", () =>
  renderBlogPosts(blogPostsArray)
);

// SORT EVENT LISTENER:
sortSelect.addEventListener("change", (event) =>
  sortBlogPosts(event, blogPostsArray)
);

// SORT BLOGPOST FUNCTION
const sortBlogPosts = (event, blogPostsArray) => {
  // Clear rendered blogposts.
  blogPostsElement.textContent = "";

  // Based on userOption, returns sorted array:
  let sortedArray;
  if (event.target.value === "newest-frist") {
    sortedArray = blogPostsArray.sort((a, b) => {
      return b.date.getTime() - a.date.getTime();
    });
  } else if (event.target.value === "oldest-frist") {
    sortedArray = blogPostsArray.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });
  } else if (event.target.value === "")
    // Render blogpost with sortedArray.
    renderBlogPosts(sortedArray);
};

// SEARCH EVENT LISTENER
searchInput.addEventListener("input", () => searchBlogs(blogPostsArray));

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

// TODO: Toggle visbility inputfield
// searchButton.addEventListener("click", () => blogSearch());

// const blogSearch = () => {
// if (searchInput.style.display === "none") {
//   searchInput.style.display = "inline";
// } else {
//   searchInput.style.display = "none";
// }
// };

// CREATE BLOGPOSTS
const renderBlogPosts = (blogPostArray) => {
  blogPostArray.forEach((blogPost, blogPostIndex) => {
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
    blogPostHeartImage.src = "../assets/icons/general/heart.svg";
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
  });
};
