const start=document.getElementById("suc");
start.addEventListener('click',function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {data:"start"});
});
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    document.getElementById("output").innerHTML=request;
  });