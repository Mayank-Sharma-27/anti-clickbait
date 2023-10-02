
# Anti-Clickbait: A Chrome Extension

[![GitHub license](https://img.shields.io/github/license/Mayank-Sharma-27/anti-clickbait)](https://github.com/Mayank-Sharma-27/anti-clickbait/blob/main/LICENSE)

Anti-Clickbait is a Chrome extension that analyzes YouTube videos and provides users with suggested titles and a summary, allowing them to better judge the content of a video before watching it.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Analyzes YouTube videos that are less than 15 minutes in duration.
- Fetches and displays a list of suggested titles and a summary for a video.
- Helps users discern the actual content of a video, potentially avoiding clickbait.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Mayank-Sharma-27/anti-clickbait.git
```

2. Open the Chrome browser and navigate to `chrome://extensions/`.

3. Ensure "Developer mode" is turned on (usually a toggle in the top right corner).

4. Click "Load unpacked" and select the directory where you cloned the repository.

5. The Anti-Clickbait extension should now be installed and ready for use!

## Usage

1. Navigate to a YouTube video page.

2. Click on the Anti-Clickbait extension icon in your browser's toolbar.

3. Click the "Analyze Video" button.

4. If the video is less than 15 minutes in duration, the extension will fetch and display a list of suggested titles and a summary for the video.

## Documentation

The main components of the plugin are:

- `manifest.json`: Provides metadata about the extension like its name, version, permissions, and the scripts it uses.
- `contentScript.js`: This script runs when a YouTube video page is loaded. It checks the video's duration and, if the video is short, fetches titles and summary.
- `popup.html` and `popup.js`: The UI and logic for the extension's popup. This is what users interact with when they click the extension icon.
- `background.js`: For any background tasks or listeners. It's currently empty but can be populated if background functionalities are required in the future.

The extension communicates with a backend API to fetch the video's titles and summary. This backend is hosted on AWS Lambda and is secured to prevent unauthorized access.

## Contributing

If you're interested in improving the Anti-Clickbait extension or adding new features, feel free to make a pull request. All contributions are appreciated!

## License

This project is licensed under the terms of the MIT license. See [LICENSE](https://github.com/Mayank-Sharma-27/anti-clickbait/blob/main/LICENSE) for more details.

---

You can save this as `README.md` in your GitHub repository. Note that you might need to make additional modifications based on any specific details about your plugin or any other details you'd like to include.
