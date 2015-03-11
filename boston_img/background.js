
function navigate(url) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {	
	chrome.tabs.update(tabs[0].id, {url: url});
	});
}

chrome.omnibox.onInputEntered.addListener(function() {
  navigate("https://www.pinterest.com/bterrierdogs/boston-terrier-photos/");
});


