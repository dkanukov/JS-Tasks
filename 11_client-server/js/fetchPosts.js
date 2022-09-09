const contentPlace = document.getElementById('content');

function createPosts(post) {
  const link = document.createElement('a');
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const cardText = document.createElement('p');
  link.href = `post.html?postId=${post.id}`;
  link.classList.add('post-link');
  card.classList.add('card');
  cardBody.classList.add('card-body');
  cardText.classList.add('text-center', 'text-dark');
  cardText.innerText = post.title;

  cardBody.append(cardText);
  card.append(cardBody);
  link.append(card);

  contentPlace.appendChild(link);
}

async function getPosts() {
  let pageID = window.location.search;

  if (pageID === '') pageID = 1;

  const response = await fetch(`https://gorest.co.in/public/v2/posts?page=${pageID}`);
  const data = await response.json();

  data.forEach((el) => {
    createPosts(el);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await getPosts();
});
