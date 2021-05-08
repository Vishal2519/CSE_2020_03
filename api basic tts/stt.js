
document.getElementById("btn").addEventListener("click",start);

function start(){
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function(e) {
            //recognition.stop();
            understand(e.results[0][0].transcript)
        };

        recognition.onerror = function(e) {
            //recognition.stop();
        }
    }
}

function understand(vmsg){
    document.getElementById("txta").innerHTML += vmsg;
}


/*
function convert(){
window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    const result = document.getElementById("result");
    const main = document.getElementsByTagName("textarea")[0];
    let listening = false;
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (typeof SpeechRecognition !== "undefined") {
      const recognition = new SpeechRecognition();

      const stop = () => {
        main.classList.remove("speaking");
        recognition.stop();
        button.textContent = "Start listening";
      };

      const start = () => {
        main.classList.add("speaking");
        recognition.start();
        button.textContent = "Stop listening";
      };

      const onResult = event => {
        result.innerHTML = "";
        for (const res of event.results) {
          const text = document.createTextNode(res[0].transcript);
          const p = document.createElement("p");
          if (res.isFinal) {
            p.classList.add("final");
          }
          p.appendChild(text);
          result.appendChild(p);
        }
      };
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.addEventListener("result", onResult);
      button.addEventListener("click", event => {
        listening ? stop() : start();
        listening = !listening;
      });
    } else {
      button.remove();
      const message = document.getElementById("message");
      message.removeAttribute("hidden");
      message.setAttribute("aria-hidden", "false");
    }
  });
}*/