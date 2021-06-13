

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();
      recognition.onresult = function(e) {
          //recognition.stop();
          understand(e.results[0][0].transcript)
      };

      recognition.onerror = function(e) {
          //recognition.stop();
      }

      function understand(msg) {
          console.log(msg);
        if(msg=="total"){
            chrome.storage.sync.get(['key'],function(result){
                var total=JSON.parse(result.key)["messagesTotal"];
                //document.getElementById("unreadCount").innerHTML="Unread messages in your inbox is:"+JSON.parse(result.key)["messagesUnread"];
                chrome.runtime.sendMessage( {type:"to",data: total});
               
            } );
        }
        else if(msg=="messages"){
            chrome.storage.sync.get(['key'],function(result){
                var unread=JSON.parse(result.key)["messagesUnread"];
                //document.getElementById("unreadCount").innerHTML="Unread messages in your inbox is:"+JSON.parse(result.key)["messagesUnread"];
                chrome.runtime.sendMessage( {type:"un",data: unread});
               
            } );
        }
        //startDictation();
    }