function remove_context_box() {
	let names = [
		"ytd-clarification-renderer",
		"ytd-info-panel-container-renderer"
	];
	let cb = document.getElementById("clarify-box");
	if (cb)
		cb.remove();
	for (let i = 0; i < names.length; ++i) {
		let all = document.getElementsByTagName(names[i]);
		if (all)
			for (let j = 0; j < all.length; ++j)
				all[j].remove();
	}
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (tab.url.indexOf("youtube.com/") >= 0) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: remove_context_box
		});
	}
});
