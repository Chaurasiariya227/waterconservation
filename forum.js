document.getElementById("create-post-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page
  
    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
  
    // Basic validation
    if (!title || !content) {
      alert("Please fill in both the title and content.");
      return;
    }
  
    // You would typically send the data to a backend here (e.g., using AJAX or Fetch API)
    // For example:
    // fetch('/api/create-post', { method: 'POST', body: JSON.stringify({ title, content }) })
    // .then(response => response.json())
    // .then(data => console.log(data));
  
    // For now, we'll just log the data to the console
    console.log("New Post Created:");
    console.log("Title:", title);
    console.log("Content:", content);
  
    // Redirect user back to the forum after posting (for now, just use a simple alert)
    alert("Your post has been created successfully!");
    window.location.href = "forum.html"; // Redirect to the forum page
  });
  // Check if the user is logged in (example using localStorage for simplicity)
/*if (!localStorage.getItem("isLoggedIn")) {
    alert("You must be logged in to create a post!");
    window.location.href = "login.html"; // Redirect to the login page if not logged in
  }*/
  
  