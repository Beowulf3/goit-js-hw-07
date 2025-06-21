const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements[0].value.trim();
  const password = event.target.elements[1].value.trim();
  if (!email || !password) {
    alert("All form fields must be filled in");
  } else {
    const info = {
      [event.target.elements[0].name]: email,
      [event.target.elements[1].name]: password,
    };
    console.log(info);
    form.reset();
  }
});
