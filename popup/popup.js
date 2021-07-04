!(function () {
    
  startBtn = document.querySelector('.start'),
  stopBtn = document.querySelector('.stop');
  startBtn.onclick = () => {
    if (navigator.onLine) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data:"start"});
            console.log("message sent");
        });
      } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data:"check"});
        });
      }  

    
}
  
  stopBtn.onclick = () => {
      console.log("stop");
  }

})()
var msg=document.querySelector('.main');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.type=="body"){
      var span = document.createElement('span'),
              span2 = document.createElement('p');
          span.innerHTML = span2.innerHTML = request.data;
          if (span.innerHTML.includes('question mark')) {
              span.innerHTML = '? ';
          }
          if (span.innerHTML.includes('at')) {
            span.innerHTML = '@ ';
        }
          if (span.innerHTML.includes('line break')) {
              span.innerHTML = '<p></p>';
              console.log(span.innerHTML);
          }
          if (span.innerHTML.includes('paragraph break')) {
              span.innerHTML = '<br><br>';
              console.log(span.innerHTML);
          }
          if (span.innerHTML.includes('full stop')) {
              span.innerHTML = span.innerHTML.replace(/(full stop)/g, '. ');
          }

          if (span.innerHTML.includes('comma')) {
              span.innerHTML = ', ';
          }
          if (span.innerHTML.includes('exclamation sign')) {
              span.innerHTML = span.innerHTML.replace(/(exclamation sign)/g, '! ');
          }
          if (span.innerHTML.includes('open inbox')) {
            window.open("https://heyeva-1.shreydd.repl.co/");
        }
          if (span.innerHTML.includes('send mail')) {
              var dam = Array.from(document.querySelectorAll('.main span')),
               p1, p2, index, subject, body;

              dam.map((d, i) => {
                       if (d.innerHTML === '<p></p>') {
          
                       index = i;
                      console.log(index);
                   }
                  p1 = dam.slice(0, index), p2 = dam.slice(index + 1, dam.length);

                  subject = p1.map(d => d.innerHTML);
                  body = p2.map(d => d.innerHTML);
                 });
                 window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=shreyasrobert@gmail.com'+ '&su=' + subject + '&body=' + body);                
          }            
          else{
               msg.appendChild(span);
    }
  }
  });
   
  
  

    
chrome.storage.sync.get(['key'],function(result){
    document.getElementById("totalCount").innerHTML="Total messages in your inbox is:"+JSON.parse(result.key)["messagesTotal"];
    document.getElementById("unreadCount").innerHTML="Unread messages in your inbox is:"+JSON.parse(result.key)["messagesUnread"];

} );

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if(request.type=="send"){
//        var toemail=document.getElementById("toemail").value;
//        var subject=document.getElementById("subject").value;
//        var body=document.getElementById("body").value;
//        window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to='+toemail+ '&su=' + subject + '&body=' + body.replace(/(<br><br>)/g, '%0D'));
//        //window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=someone@gmail.com&su=' + subject + '&body=' + body.replace(/(<br><br>)/g, '%0D') + '&cc=cc@mail.com&bcc=bcc@mail.com', '_blank');
//     }
//   });
//JSON.parse(result.key)["id"];
 