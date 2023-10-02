// Check if the current page is a YouTube video page
if (window.location.href.match(/watch\?v=/)) {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === "getVideoDetails") {
        // Get video duration from the page metadata
        const durationMeta = document.querySelector('meta[itemprop="duration"]');
        const duration = durationMeta ? durationMeta.content : null;
        
        // Check if the video is less than 15 minutes
        const isShortVideo = duration && parseDuration(duration) < 15 * 60;
        
        // If it's a short video, fetch the transcript and send the details
        if (isShortVideo) {
          const videoId = new URLSearchParams(window.location.search).get('v');
          fetchVideoInfo(videoId).then(transcript => {
            sendResponse({ isShortVideo, transcript });
          });
        } else {
          sendResponse({ isShortVideo });
        }
      }
      return true; // Required for asynchronous sendResponse
    });
  }
  
  // Function to parse ISO 8601 duration format (e.g., PT15M33S) to seconds
  function parseDuration(duration) {
    // Implementation here
  }
  
  function fetchVideoInfo(videoId) {
    return new Promise((resolve, reject) => {
        const apiEndpoint = "https://XXXXX.execute-api.REGION.amazonaws.com/default/YouTubeVideoInfo";

        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoId: videoId })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch video information');
            }
        })
        .then(data => {
            const titles = data.titles;
            const summary = data.summary;
            resolve({ titles, summary });
        })
        .catch(error => {
            console.error("Error fetching video information:", error);
            reject(error);
        });
    });
}