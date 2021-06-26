console.log("Hello this is EVA");
setTimeout(tableStuff, 5000);
let tablesubject;
let tablefrom;
let tabledate;
let currentEmail=-1; //to jump around emails
let x=false;
let open=0;

const artyom= new Artyom();
window.SpeechRecognition = window.SpeechRecognition
|| window.webkitSpeechRecognition;



var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-GB';
//recognition.maxAlternatives = 10;

recognition.onresult = (e) => {
for (var i = e.resultIndex; i < e.results.length; ++i) {
    if (e.results[i].isFinal) {
        var str=e.results[i][0].transcript;
          if(str.trim()=="read one"){
                console.log("Triggered");
                //logic for closing modal
                closeModals();
                //main
                efrom = tablefrom[0].textContent;
                subject = tablesubject[0].textContent;
                artyom.say("this email is from" + efrom +" and the subject is" +subject);
                tablesubject[0].click();
                currentEmail = 0;
                console.log("end command section");
          }
          else if(str.trim()=="read second"){
                console.log("Triggered");
                //logic for closing modal
                closeModals();
                //main
                efrom = tablefrom[1].textContent;
                subject = tablesubject[1].textContent;
                artyom.say("this email is from" + efrom +" and the subject is" +subject);
                tablesubject[1].click();
                currentEmail = 1;
                console.log("end command section");
          }
          else if(str.trim()=="read third"){
                console.log("Triggered");
                //logic for closing modal
                closeModals();
                //main
                efrom = tablefrom[2].textContent;
                subject = tablesubject[2].textContent;
                artyom.say("this email is from" + efrom +" and the subject is" +subject);
                tablesubject[2].click();
                currentEmail = 2;
                console.log("end command section");
          }
          else if(str.trim()=="read 4"){
                console.log("Triggered");
                //logic for closing modal
                closeModals();
                //main
                efrom = tablefrom[3].textContent;
                subject = tablesubject[3].textContent;
                artyom.say("this email is from" + efrom +" and the subject is" +subject);
                tablesubject[3].click();
                currentEmail = 3;
                console.log("end command section");
          }
          else if(str.trim()=="read 5"){
                console.log("Triggered");
                //logic for closing modal
                closeModals();
                //main
                efrom = tablefrom[4].textContent;
                subject = tablesubject[4].textContent;
                artyom.say("this email is from" + efrom +" and the subject is" +subject);
                tablesubject[4].click();
                currentEmail = 4;
                console.log("end command section");
          }
          else if(str.trim()=="read next"){
                console.log("Triggered");
                //logic for closing modal
                closeModals();
                //main
                currentEmail += 1;
                efrom = tablefrom[currentEmail].textContent;
                subject = tablesubject[currentEmail].textContent;
                artyom.say("this email is from" + efrom +" and the subject is" +subject);
                tablesubject[currentEmail].click();
                console.log("end command section");
          }
          else if(str.trim()=="compose compose" || x==true){
                x=true;
                closeModals();
                console.log("from compose");
                if(open==0){
                var composeBtn = document.getElementById("compose-button");
                composeBtn.click();
                
                }
                console.log(str.trim());

                
          }
          else{
            console.log(str.trim());
          }
        
    }
}
}

function tableStuff() {
	tablefrom = document.getElementsByClassName("efrom");
	tablesubject = document.getElementsByClassName("esubject");
	tabledate = document.getElementsByClassName("edate");

	console.log("Loaded");

	artyom.say("Hello, this is Eva! how can I help you?");
}

function closeModals(){
    if($('.modal').is(':visible')) {
      return $('.modal').modal('hide');
  }
}
window.onload=recognition.start();

 recognition.onend = () => {
       recognition.start();
    }

// artyom.on(["read previous"]).then(function(i){
//     console.log("Triggered");
//     //logic for closing modal
//     closeModals();
//     //main
//     currentEmail -= 1;
//     efrom = tablefrom[currentEmail].textContent;
//     subject = tablesubject[currentEmail].textContent;
//     artyom.say("this email is from" + efrom +" and the subject is" +subject);
//     tablesubject[currentEmail].click();
//     console.log("end command section");
// });


// function speechAdr(){
//   artyom.say("Specify the email address");

//   artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
//     if(isFinal){
//         // recognized =+ "@gmail.com"; 
//         document.getElementById("compose-to").innerHTML = recognized;
//         console.log("Final recognized text: " + recognized);
//     }else{
//         console.log(recognized);
//     }
//   });

// }


 function tts1(msg){
   	artyom.say("the body contains this message");
  	artyom.say(msg);
 	// let utterance = new SpeechSynthesisUtterance(msg);
 	// speechSynthesis.speak(utterance);
 	console.log("end of body");
 }

