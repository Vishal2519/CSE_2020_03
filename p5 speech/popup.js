document.getElementById("demo");
document.addEventListener("click",say);
/*function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);}*/

    function say(){
        var myVoice = new p5.Speech(); // new P5.Speech object
                myVoice.speak("hello");
            }
            





