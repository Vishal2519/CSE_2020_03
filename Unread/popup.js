const start=document.getElementById("ram");
start.addEventListener('click',function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {data:"start"});
    console.log("message sent");
});
});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.type=="toemail"){
      document.getElementById("toemail").innerHTML=request.data;
    }
  });
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.type=="subject"){
      document.getElementById("subject").innerHTML=request.data;

    }
  });
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.type=="body"){
        document.getElementById("body").innerHTML=request.data;
      }
    });

    
chrome.storage.sync.get(['key'],function(result){
    document.getElementById("totalCount").innerHTML="Total messages in your inbox is:"+JSON.parse(result.key)["messagesTotal"];
    document.getElementById("unreadCount").innerHTML="Unread messages in your inbox is:"+JSON.parse(result.key)["messagesUnread"];

} );

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.type=="send"){
       var toemail=document.getElementById("toemail").value;
       var subject=document.getElementById("subject").value;
       var body=document.getElementById("body").value;
       window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to='+toemail+ '&su=' + subject + '&body=' + body.replace(/(<br><br>)/g, '%0D'));
       //window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=someone@gmail.com&su=' + subject + '&body=' + body.replace(/(<br><br>)/g, '%0D') + '&cc=cc@mail.com&bcc=bcc@mail.com', '_blank');
    }
  });
//JSON.parse(result.key)["id"];
 