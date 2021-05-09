console.log("Chrome extension ready to go!");
/*let para= document.getElementsByTagName("p");
for (elt of para){
elt.style['background-color']="#FF00FF";
}*/

/*chrome.runtime.onMessage.addListener(gotMsg);

function gotMsg(message,sender,sendResponse){
//console.log(message.txt);
sendResponse("Back at bg");
}*/

/*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });*/

  document.getElementById("say");
  document.addEventListener("click",Say);

  function Say(){
    chrome.tts.speak('Hello');
  }
  

