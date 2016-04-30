function run() {
	var script = document.createElement('script');
	script.src = chrome.extension.getURL("page-side.js");
	document.getElementsByTagName('head')[0].appendChild(script);
}