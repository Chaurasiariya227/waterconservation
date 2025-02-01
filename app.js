document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const postContent = e.target.querySelector('textarea').value;
    if (postContent) {
      const post = document.createElement('div');
      post.className = 'post';
      post.textContent = postContent;
      document.getElementById('posts').prepend(post);
      e.target.querySelector('textarea').value = '';
    }
  });
  
 