chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete") {
    if (tab.url.includes("quora.com") && !tab.url.includes("?=")) {
      var newUrl = tab.url + "?=search";
      chrome.tabs.update(tabId, {url: newUrl});
    }
  }
});
