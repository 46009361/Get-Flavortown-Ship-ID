// sw.js
chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    id: 1, priority: 1, 
    action: { type: "modifyHeaders", requestHeaders: [{ header: "X-Flavortown-Ext-12093", operation: "set", value: "true" }] },
    condition: { urlFilter: "flavortown.hackclub.com", resourceTypes: ["main_frame"] }
  }],
  removeRuleIds: [1]
});