console.log("background script is running");


//chrome.browserAction.onClicked.addListener(buttonClicked);

//function buttonClicked(tab) {
  //chrome.runtime.sendMessage('Hello');
//}
//console.log("Message sent");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  }
);