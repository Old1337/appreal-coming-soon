let btn = document.querySelector(".btn");

btn.addEventListener("click", validation);

function validation(e) {
  let email = document.querySelector(".email").value;
  let reg = /^[^]+@[^]+\.[a-z]{2,3}$/;
  let emailActive = document.querySelector(".email");
  let error = document.querySelector(".error");
  let errorMsg = document.querySelector(".error-msg");

  if (email.match(reg)) {
    emailActive.classList.remove("active");
    errorMsg.classList.remove("active");
    error.classList.remove("active");
  } else {
    emailActive.classList.add("active");
    errorMsg.classList.add("active");
    error.classList.add("active");
  }
}
