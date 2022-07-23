async function getPosts() {
  const response = await fetch('https://gorest.co.in/public/v2/posts');
  const posts = await response.json();
  return posts;
}

document.addEventListener('DOMContentLoaded', () => {
  const posts = getPosts();
  console.log(posts);
});
