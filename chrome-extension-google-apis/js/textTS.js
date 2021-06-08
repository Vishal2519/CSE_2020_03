document.getElementById("redirectRepl").addEventListener("click", repl);

function repl(){
    chrome.tabs.create({ 'url': "https://eva.shreydd.repl.co/" });
}




// function countlab(label) { //referenced at line 216 in background
// 	// speechlab(label);
// }
// function speechlab(label) {
// 	// let utterance = new SpeechSynthesisUtterance('As per the API calls'+label);
//  //    speechSynthesis.speak(utterance);
// }