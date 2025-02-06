// Background script for Chrome Extension
chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome extension installed');
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Received message:', request);
    // Add message handling logic here
    sendResponse({ status: 'received' });
});
