function showPasswordRequirements() {
  if (document.getElementById("password").value === "") {
    document.getElementById("password-requirements").style.display = "block";
  } else {
    document.getElementById("password-strength").style.display = "block";
  }
}

function hidePasswordRequirements() {
  document.getElementById("password-requirements").style.display = "none";
  document.getElementById("password-strength").style.display = "none";
}

function verifyPassword() {
  document.getElementById("password-requirements").style.display = "none";
  document.getElementById("password-strength").style.display = "block";

  var passwordField = document.getElementById("password");
  var password = document.getElementById("password").value;
  var userId = document.getElementById("user-id").value;
  var progressBar = document.getElementById("strength");

  var upperCase = document.getElementById("upper-case");
  var lowerCase = document.getElementById("lower-case");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  var characters = document.getElementById("characters");
  var userIdMatch = document.getElementById("user-id-match");

  var lowerCaseLetters = /[a-z]/g;
  if (password.match(lowerCaseLetters)) {
    lowerCase.classList.remove("invalid");
    lowerCase.classList.add("valid");
    progressBar.value++;
  } else {
    lowerCase.classList.remove("valid");
    lowerCase.classList.add("invalid");
    progressBar.value--;
  }

  var upperCaseLetters = /[A-Z]/g;
  if (password.match(upperCaseLetters)) {
    upperCase.classList.remove("invalid");
    upperCase.classList.add("valid");
    progressBar.value++;
  } else {
    upperCase.classList.remove("valid");
    upperCase.classList.add("invalid");
    progressBar.value--;
  }

  var numbers = /[0-9]/g;
  if (password.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    progressBar.value++;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    progressBar.value--;
  }

  //   var validCharacters = !/[^0-9A-Za-z!@#$%&*()_\-+={[}\]|\:;"'<,>.?\/\\~`]/
  //   if(password.match(validCharacters)){
  //     characters.classList.remove("invalid");
  //     characters.classList.add("valid");
  //     progressBar.value++;
  //   }
  //   else {
  //     characters.classList.remove("valid");
  //     characters.classList.add("invalid");
  //     progressBar.value--;
  //   }

  if (password.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    progressBar.value++;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    progressBar.value--;
  }

  if (password === userId) {
    userIdMatch.classList.remove("valid");
    userIdMatch.classList.add("invalid");
    progressBar.value--;
  } else {
    userIdMatch.classList.remove("invalid");
    userIdMatch.classList.add("valid");
    progressBar.value++;
  }
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var verifyPassword = document.getElementById("verify-password").value;

  if (password !== verifyPassword) {
    document.getElementById("pwd-mismatch").style.display = "block";
    return false;
  }
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var verifyEmail = document.getElementById("verify-email").value;

  if (email !== verifyEmail) {
    document.getElementById("email-mismatch").style.display = "block";
    return false;
  }
  return true;
}

function register() {
  if (validateEmail() && validatePassword()) {
    localStorage.clear();
    localStorage.setItem("Username", document.getElementById("user-id").value);
    localStorage.setItem("Password", document.getElementById("password").value);
    localStorage.setItem(
      "Email Address",
      document.getElementById("email").value
    );
    localStorage.setItem(
      document.getElementById("security-q1").value,
      document.getElementById("security-a1").value
    );
    localStorage.setItem(
      document.getElementById("security-q2").value,
      document.getElementById("security-a2").value
    );
    localStorage.setItem(
      "Phone Number",
      document.getElementById("phone").value
    );
    localStorage.setItem("Address", document.getElementById("address").value);
    localStorage.setItem("Areas", document.getElementById("areas").value);
  } else {
    alert("Either email combination or password combination do not match!");
  }
}

function resetForm() {
  document.getElementById("user-id").value = "";
  document.getElementById("password").value = "";
  document.getElementById("verify-password").value = "";
  document.getElementById("email").value = "";
  document.getElementById("verify-email").value = "";
  document.getElementById("security-q1").value = "--";
  document.getElementById("security-q2").value = "--";
  document.getElementById("security-a1").value = "";
  document.getElementById("security-a1").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("areas").value = "";
}
