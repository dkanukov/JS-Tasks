const commentContent = document.getElementById('commentContent');

async function fetchPost(postID) {
  const res = await fetch(`https://gorest.co.in/public-api/posts/${postID}`);
  const data = await res.json();
  document.getElementById('title').innerText = data.data.title;
  document.getElementById('body').innerText = data.data.body;
}

function createComment(comment) {
  const commentCard = document.createElement('div');
  const commentAuthor = document.createElement('h5');
  const commentText = document.createElement('p');

  commentAuthor.innerText = comment.name;
  commentText.innerText = comment.body;
  commentCard.append(commentAuthor, commentText);
  commentContent.append(commentCard);
}

function displayErrorMessage() {
  const errorMessage = document.createElement('h4');
  errorMessage.classList.add('text-danger', 'text-center');
  errorMessage.innerText = 'У данного поста еще не комментариев';
  commentContent.append(errorMessage);
}

async function fetchComments(posID) {
  const res = await fetch(`https://gorest.co.in/public-api/comments?post_id=${posID}`);
  const data = await res.json();

  if (!data.data.length) {
    displayErrorMessage();
  } else {
    data.data.forEach((comment) => {
      createComment(comment);
    });
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postID = urlParams.get('postId');
  await fetchPost(postID);
  await fetchComments(postID);
});
