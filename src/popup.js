document.getElementById('analyzeBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getVideoDetails" }, response => {
        if (response.isShortVideo) {
          // Display the fetched suggested titles and summary
          const titles = response.titles;
          const summary = response.summary;
  
          // Assuming you have some DOM elements to display the titles and summary
          document.getElementById('titlesList').innerHTML = titles.join('<br>'); // Displaying titles
          document.getElementById('summary').textContent = summary; // Displaying summary
          document.getElementById('results').hidden = false;
        } else {
          // Display a message that the video is not a short video
          document.getElementById('results').hidden = true;
          alert("The video is longer than 15 minutes or it's not a YouTube video.");
        }
      });
    });
  });
  