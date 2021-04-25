function startDictation() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function(e) {
            //recognition.stop();
            understand(e.results[0][0].transcript);
        };

        recognition.onerror = function(e) {
            //recognition.stop();
        }
    }
}


   function understand(msg){
       if(msg=="open Gmail"){
        
            chrome.runtime.sendMessage({greeting:"hello"}, function(response) {
            if(response.start=="dictate")
                  console.log("script working");
              
                  
            });
            

       }
    chrome.runtime.sendMessage(msg);  //message to popup.js
    
   }

   
    
    
    chrome.runtime.onMessage.addListener(    //message from popup.js to startDictation
    function(request, sender, sendResponse) {
      if (request.data == "start")
        startDictation();
    });







