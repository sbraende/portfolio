// BLOGPOSTS KEY DATA ARRAY
const blogPostsArray = [
  {
    title: "Design Clone - Stabæk Fotball",
    date: "2024-11-26",
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
    date: "2024-10-21",
    thumbnail: "../assets/images/blogposts/2048/2048-thumbnail.webp",
    description:
      "This project is a design copy of the popular game 2048, originally created by Gabriele Cirulli. The game features a grid where players slide tiles of numbers to combine them, aiming to reach the 2048 tile.",
    path: "../blogposts/2048.html",
    hashtags: "design HTML CSS assignment",
    readLengthMin: "2",
  },
];

// SELECT ELEMENTS FROM DOM
const blogPostsElement = document.querySelector(".blog-posts");

// CREATE BLOGPOSTS
const createBlogPost = (blogPostArray) => {
  blogPostArray.forEach((blogPost, blogPostIndex) => {
    // CREATE BLOG DOM ELEMENTS

    // TODO: Add A tags for title and image
    const blogPostContainer = document.createElement("li");
    const blogPostContent = document.createElement("div");
    const blogPostImage = document.createElement("img");
    const blogPostTitle = document.createElement("h3");
    const blogPostDescription = document.createElement("p");
    const blogPostTools = document.createElement("div");
    const blogPostShare = document.createElement("button");
    const blogPostShareImage = document.createElement("img");

    // APPEND ELEMENTS
    blogPostsElement.append(blogPostContainer);
    blogPostContainer.append(blogPostContent);
    blogPostContent.append(blogPostImage, blogPostTitle, blogPostDescription);
    blogPostContainer.append(blogPostTools);
    blogPostTools.append(blogPostShare);
    blogPostShare.append(blogPostShareImage);

    // ADD CONTENT TO ELEMENT
    blogPostContent.href = "#";
    blogPostImage.src = blogPost.thumbnail;
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
    blogPostShare.classList.add("blog-posts__share");
  });
};

createBlogPost(blogPostsArray);

// blogPostsArray.forEach((e) => console.log(e.title));
