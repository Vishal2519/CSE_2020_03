//var artyom = new Artyom();
/*
artyom.addCommands([
    {
        indexes: ["Replay"],
        action: function(i){
            console.log(" Triggered");

        }
    },
    {
        indexes: ["Good night"],
        action: function(i){
            console.log("Good night Triggered");
        }
    }
]);*/

document.getElementById("commands").addEventListener("click",listen);

function listen(){
    Jarvis.say("how can I help you"); 

}