
window.SpeechRecognition = window.SpeechRecognition
|| window.webkitSpeechRecognition;



var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
//recognition.maxAlternatives = 10;

recognition.onresult = (e) => {
for (var i = e.resultIndex; i < e.results.length; ++i) {
    if (e.results[i].isFinal) {
          chrome.runtime.sendMessage({type:"body",data: e.results[i][0].transcript});
    }
}
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.data == "start")
      console.log("Message recieved");
        recognition.start()
    });