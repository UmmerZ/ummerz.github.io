const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const form = document.getElementById("form");

const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  swearCheck(e);
  console.log();
});
function swearCheck() {
  const messageValue = message.value();
  for (let i = 0; i < swearWords.length; i++) {
    if (swearWords[i] === messageValue);
    alert("word found");
  }
}
