//step -1 add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step -2 get the email address inside the email input field
  // always remember to use  .value  t get text from an input field
  const userEmail = document.getElementById("user-email");
  const email = userEmail.value;

  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;
  //   console.log(email, password);
  //DANGER: do not verify email nad password on the client side
  // step-3
  if (email === "demo.jp@gmail.com" && password === "secret") {
    location.href = "bank.html";
  } else {
    alert("Enter Your Correct Email and Password!!!");
  }
});



