async function fetchPost(postID) {
  const res = await fetch(`https://gorest.co.in/public-api/posts/${postID}`);
  const data = await res.json();
  console.log(data.data);
  document.getElementById('title').innerText = data.data.title;
  document.getElementById('body').innerText = data.data.body;
}

async function fetchComments(posID) {
  const res = await fetch(`https://gorest.co.in/public-api/comments?post_id=${posID}`);
  const data = await res.json();

  console.log(data);
  if (!data.data.length) {
    console.log('no comments')
  } else {
    data.data.forEach((comment) => {
      createComment(comment);
    })
  }
}

function createComment(comment) {
  console.log('creatingComments');
}

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postID = urlParams.get('postId');
  await fetchPost(postID);
  await fetchComments(postID);
});
