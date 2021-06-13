const start=document.getElementById("ram");
start.addEventListener('click',function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {data:"start"});
    console.log("message sent");
});
});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.storage.sync.get(['key'],function(result){
      document.getElementById("totalCount").innerHTML="Total messages in your inbox is:"+JSON.parse(result.key)["messagesTotal"];
      document.getElementById("unreadCount").innerHTML="Unread messages in your inbox is:"+JSON.parse(result.key)["messagesUnread"];
      const artyom = new Artyom();
      if(request.type=="total"){
        document.getElementById("subject").innerHTML=request.data;
        artyom.say("Total messages in your inbox is:"+JSON.parse(result.key)["messagesTotal"]);
      }
      else if(request.type=="inbox"){
        document.getElementById("subject").innerHTML=request.data;
        artyom.say("unread messages in your inbox is:"+JSON.parse(result.key)["messagesUnread"]);
      }
      
  } );
    
  });
  
/*chrome.storage.sync.get(['key'],function(result){
    document.getElementById("totalCount").innerHTML="Total messages in your inbox is:"+JSON.parse(result.key)["messagesTotal"];
    document.getElementById("unreadCount").innerHTML="Unread messages in your inbox is:"+JSON.parse(result.key)["messagesUnread"];

} );*/

//JSON.parse(result.key)["id"];