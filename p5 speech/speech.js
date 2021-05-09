function sestUp(){
    noCanvas();
    let lang= navigator.language || 'en-US'
    let spechRec=new p5.SpeechRec(lang,gotSpeech);

    speechRec.start();

    function gotSpeech(){
        console.log(spechRec);
    }

}