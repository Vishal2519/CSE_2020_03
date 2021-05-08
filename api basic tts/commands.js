var artyom = new window.Artyom();
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
    /*artyom.on(['testing','Another test']).then((i) => {
        switch (i) {
            case 0:
                artyom.say("first command works");
            break;
            case 1:
                artyom.say("This other command works as well");
            break;            
        }
    });*/

    artyom.on(['test command']).then(() =>{
        artyom.say("command worked successfully");
        console.log("command worked successfully");
    });
}