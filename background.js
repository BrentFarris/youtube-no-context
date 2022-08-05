function remove_context_box() {
	let cb = document.getElementById("clarify-box");
	if (cb)
		cb.remove();
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (tab.url.indexOf("youtube.com/watch") >= 0) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: remove_context_box
		});
	}
});
