
function ram(){// if you use artyom.fatality , wait 250 ms to initialize again.
    const artyom=new Artyom();

    var commandHello = {
indexes:["to address","subject subject","body body","exit exit","send mail"], // These spoken words will trigger the execution of the command
action:function(i){ 
    // Action to be executed when a index match with spoken word
    if (i==0){
        artyom.say("To identified");
        
        artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
            if(isFinal){
                chrome.runtime.sendMessage({type:"toemail",data: recognized}); 
            }else{
                console.log(recognized);
            }
        });
    }
    else if (i==1){
        artyom.say("Subject Identified");
        
        artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
            if(isFinal){
                chrome.runtime.sendMessage({type:"subject",data: recognized}); 
            }else{
                console.log(recognized);
            }
        });
    }
    else if(i==2){
        artyom.say("Body Identified");
        artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
            if(isFinal){
                chrome.runtime.sendMessage({type:"body",data: recognized}); 
            }else{
                console.log(recognized);
            }
        });
    }
    else if(i==3){
        artyom.say("turning off");
        artyom.fatality();
    }
    
    else if(i==4){
        chrome.runtime.sendMessage({type:"send"}); 
    }

}
};
artyom.addCommands(commandHello);

     artyom.initialize({
        lang:"en-GB",// A lot of languages are supported. Read the docs !
        continuous:true,// Artyom will listen forever
        listen:true, // Start recognizing
        debug:true, // Show everything in the console
        speed:1 // talk normally
    });
}



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.data == "start")
      console.log("Message recieved");
        ram();
    });
