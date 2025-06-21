const userName = document.querySelector("#name-output");
const textInput = document.querySelector("#name-input");
textInput.addEventListener("input", (event) => {
  const str = event.currentTarget.value.trim();
  if (!str) {
    userName.textContent = "Anonymous";
  } else {
    userName.textContent = str;
  }
});
