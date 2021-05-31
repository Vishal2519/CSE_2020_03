

chrome.browserAction.onClicked.addListener(function tab() {
  // creates a tab
  chrome.tabs.create({"url" : "index.html"});

});

// If you are using VanillaJS
// const artyom = new Artyom();

// artyom.say("Hello user");
// artyom.say("Let's start composing an email, please specify the recipient's email address's first part like username in username@gmail.com  ");

// document.getElementsByClassName("Startbtn").onClicked(listen());

// function listen() {

//   artyom.initialize({
//       lang:"en-US",
//       debug:true, // Show what recognizes in the Console
//       listen:true, // Start listening after this
//       speed:0.9, // Talk a little bit slow
//       mode:"normal" // This parameter is not required as it will be normal by default
//       });
      
//       artyom.on(["read email"]).then(function(i){
//         var content = String(document.getElementsByClassName("firstpart").innerHTML);
//         // artyom.say(content);
//          console.log(content);
//   });



document.getElementById("Startbtn").addEventListener("click",start);

function start(){
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        const artyom = new Artyom();

        artyom.initialize({
        lang:"en-US",
        continuous:true,
        debug:true, // Show what recognizes in the Console
        listen:true, // Start listening after this
        speed:0.9, // Talk a little bit slow
        mode:"normal" // This parameter is not required as it will be normal by default
        });

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function(e) {

            //recognition.stop();
            understand(e.results[0][0].transcript);
            console.log(e.results[0][0].transcript);

            artyom.say("adding gmail as the domain name of the address",{
              onEnd: function(){
                document.getElementById("firstpart").innerHTML +="@gmail.com";
              }
            });
        };

        recognition.onerror = function(e) {
            //recognition.stop();
        }
    }
}

function understand(vmsg){
    document.getElementById("firstpart").innerHTML += vmsg;
}
