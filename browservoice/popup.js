chrome.browserAction.onClicked.addListener(function(){
    chrome.tabs.create({
      url: 'https://eva.shreydd.repl.co/'
    });
    chrome.tts.speak('Hey!, I am your voice assistant Eva, How may I help you?');
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.type == "to")
        console.log(request.data)
        //var utterThis = new SpeechSynthesisUtterance(request.data);
        speechSynthesis.speak(new SpeechSynthesisUtterance(request.data));
    }
  );
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.type == "un")
        console.log(request.data)
        //var utterThis = new SpeechSynthesisUtterance(request.data);
        speechSynthesis.speak(new SpeechSynthesisUtterance(request.data));
    }
  );
