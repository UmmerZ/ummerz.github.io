/*const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  window.getElementById("button");
  const form = document.createElement("li");
  form.innerHTML = name.value;
  if (form.contains("fuck")) {
    alert("bad language");
  }
});*/
//toggle hamburger menu
const navToggle = document.querySelector(".checkBox");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("navExpand");
});
