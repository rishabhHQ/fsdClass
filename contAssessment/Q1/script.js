
function validateForm() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;

  if (
    username.length >= 3 &&
    email.includes("@") &&
    email.indexOf(".", email.indexOf("@")) !== -1
  ) {
    document.getElementById("result").innerText = "VALID";
  } else {
    document.getElementById("result").innerText = "INVALID";
  }

  return false; // prevent form submit
}

