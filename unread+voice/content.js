
function ram(){// if you use artyom.fatality , wait 250 ms to initialize again.
    const artyom=new Artyom();

    var commandHello = {
indexes:["total","inbox","exit"], // These spoken words will trigger the execution of the command
action:function(i){ 
    // Action to be executed when a index match with spoken word
   
    if (i==0){
        artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
            if(isFinal){
                chrome.runtime.sendMessage({type:"total",data: recognized}); 
            }else{
                console.log(recognized);
            }
        });
    }
    else if(i==1){
        artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
            if(isFinal){
                chrome.runtime.sendMessage({type:"inbox",data: recognized}); 
            }else{
                console.log(recognized);
            }
        });
    }
    else if(i==2){
        artyom.say("turning off");
        artyom.fatality();
    }
    
    else{
        artyom.say("Come again");
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