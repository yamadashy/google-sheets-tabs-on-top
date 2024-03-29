// Update extension content for Google Sheets tabs
chrome.tabs.query({}, (tabs) => {
  for (const tabKey in tabs) {
    const tab = tabs[tabKey];

    // Do not have permission
    if (tab.url === undefined) {
      continue;
    }

    // Skip execute on discarded tab
    if (tab.discarded) {
      return;
    }

    // Under some circumstances a Tab may not be assigned an ID
    if (tab.id === undefined) {
      continue;
    }

    chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
        allFrames: true,
      },
      files: ['scripts/content.js'],
    });
  }
});
