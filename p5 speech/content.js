document.getElementById("demo");
document.addEventListener("click",say);


    function say(){
        var myVoice = new p5.Speech(); // new P5.Speech object
                myVoice.speak("hello");
            }



