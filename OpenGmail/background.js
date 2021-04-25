chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     if (request.greeting == "hello")
            chrome.tabs.create({url:"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"});
          sendResponse({start:"dictate"})
                 
          });
  


      
            
  
  