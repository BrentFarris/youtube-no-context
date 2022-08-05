function remove_context_box() {
	let names = [
		"ytd-clarification-renderer",
		"ytd-info-panel-container-renderer"
	];
	for (let i = 0; i < names.length; ++i) {
		let all = document.getElementsByTagName(names[i]);
		for (let j = 0; all && j < all.length; ++j)
			all[j].remove();
	}
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (tab && tab.url && tab.url.indexOf("youtube.com/") >= 0) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: remove_context_box
		});
	}
});
