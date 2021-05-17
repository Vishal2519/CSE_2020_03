/*function countsp(label){
    //let utterance = new SpeechSynthesisUtterance(token);
    //speechSynthesis.speak(utterance);
    var tok = label;
}*/  //the below function is called at 196 also but its commented
function countlab(label) {
	speechlab(label);
}
function speechlab(label) {
	let utterance = new SpeechSynthesisUtterance('As per the API calls'+label);
    speechSynthesis.speak(utterance);
}