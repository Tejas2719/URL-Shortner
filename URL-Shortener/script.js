function shortenURL() {
	const urlInput = document.getElementById('url-input');
	const shortUrlContainer = document.getElementById('short-url-container');
	const shortUrl = document.getElementById('short-url');
  
	// Send a POST request to the server with the long URL
	fetch('/api/shorten-url', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({ url: urlInput.value })
	})
	.then(response => response.json())
	.then(data => {
	  // Display the short URL to the user
	  shortUrl.href = data.shortUrl;
	  shortUrl.innerHTML = data.shortUrl;
	  shortUrlContainer.style.display = 'flex';
	})
	.catch(error => {
	  console.error(error);
	});
  }
  