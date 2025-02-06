
# Using as a Chrome Extension

## Development

1. **Run**: Run `npm run start` to launch the extension in development mode on your local machine. Navigate to `http://localhost:3000` to see your React app running.

## Build & Load Extension

1. **Build**: Run `npm run build` to create a production build of your React app inside the `build` folder.
2. **Load Unpacked**: In Google Chrome, open `chrome://extensions`.  
   - Make sure "Developer mode" is enabled (top-right toggle).
   - Click "Load unpacked" and select the `build` folder from this project.
3. **Activate**: Once loaded, the extension icon (or default puzzle piece) will appear in your extensions area.
4. **Open Popup**: Click the extension icon to see your React app running as a Chrome Extension popup.

That's it! You now have a working React Chrome Extension boilerplate.
