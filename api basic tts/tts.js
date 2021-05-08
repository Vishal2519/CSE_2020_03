document.getElementById("readout").addEventListener("click", readtts);

function readtts(){
    var msgg = document.getElementById("txta").value;
    console.log(msgg);
    tts1(msgg);
}