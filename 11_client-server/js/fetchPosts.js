const contentPlace = document.getElementById('content');
const pagination = document.getElementById('pagination');

function createPagination() {
  const urlParams = new URLSearchParams(window.location.search);
  const pageID = urlParams.get('pageID');
  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('page-link');
    li.classList.add('page-item');
    link.innerHTML = i + 1;
    if (i === 0) {
      link.href = 'postList.html';
    } else {
      link.href = `postList.html?pageID=${i + 1}`;
    }
    li.append(link);
    pagination.append(li);
  }
  const paginationList = document.querySelectorAll('.page-item');
  if (pageID === null) {
    paginationList[0].classList.add('active');
  } else {
    paginationList[pageID - 1].classList.add('active');
    console.log(pageID);
  }
}

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
  const urlParams = new URLSearchParams(window.location.search);
  let pageID = urlParams.get('pageID');

  if (pageID === null) {
    pageID = 1;
  } else {
    pageID++;
  }

  const response = await fetch(`https://gorest.co.in/public/v2/posts?page=${pageID}`);
  const data = await response.json();

  data.forEach((el) => {
    createPosts(el);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await getPosts();
  createPagination();
});
