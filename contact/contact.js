const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("textArea");
const form = document.getElementById("form");
const number = document.getElementById("number");
let swear = false;

const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  

  swearCheck(e);
  
});

function swearCheck(e) {
  swear = false;
  document.getElementById('textArea');

  const messageValue = message.value;

  for (let i = 0; i < swearWords.length; i++) {
    const word = swearWords[i];

    if (messageValue.includes(word)) {

      const errorMessage = document.createElement('LI')
      errorMessage.textContent = `We found a word "  ${word} " in the Email. Please avoid profanity as we belive in professionalism`;
      errorList.appendChild(errorMessage);
      swear = true;
    }
  }

  if (swear !== true) {
  
    const body = document.getElementById("textArea").value;
    const Fname = document.getElementById("name").value;
    const mySubject = document.getElementById("subject").value;
    const myNumber = document.getElementById("number").value;
    const mail = ("Full Name: " + Fname  + "%0D%0A" + "Subject: " + mySubject 
                 +  "%0D%0A" + "Phone number: " + myNumber  + "%0D%0A" + " Message: " + body);
      window.location.href = 'mailto:write2ummer@yahoo.com?body=' + mail;
    
  }
  else {
    e.preventDefault();
  }


}
    
