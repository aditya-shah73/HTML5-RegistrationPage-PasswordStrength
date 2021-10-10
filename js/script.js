function showPasswordRequirements() {
  document.getElementById("password-requirements").style.display = "block";
  document.getElementById("password-strength").style.display = "none";
}

function hidePasswordRequirements() {
  document.getElementById("password-requirements").style.display = "none";
  document.getElementById("password-strength").style.display = "none";
}

function verifyPassword() {
  document.getElementById("password-requirements").style.display = "none";
  document.getElementById("password-strength").style.display = "block";

  var password = document.getElementById("password").value;

  var upperCase = false;
  var lowerCase = false;
  var number = false;
  var length = false;
  var characters = false;
  var userIdMatch = false;

  for (var i = 0; i < password.length; i++) {
    var userID = document.getElementById("user-id").value;
    var progressBar = document.getElementById("strength");
    if (password.length >= 8 && password.length <= 20) {
      length = true;
    }
    var char = password.charCodeAt(i);
    if (userID.localeCompare(password) == 0) {
      userIdMatch = true;
    } else {
      if (char >= 48 && char <= 57) {
        number = true;
      } else if (char >= 65 && char <= 90) {
        upperCase = true;
      } else if (char >= 97 && char <= 122) {
        lowerCase = true;
      } else {
        characters = true;
      }
    }
  }
  if (userIdMatch || characters) {
    if (userIdMatch) {
      document.getElementById("user-id-match").innerHTML =
        '<span style="color:red;">&#10006;</span>&nbsp;Your password can not be the same as your user ID.';
      progressBar.value = 0;
    }
    if (characters) {
      document.getElementById("characters").innerHTML =
        '<span style="color:red;">&#10006;</span>&nbsp;Uses only these English characters: A-z, 0-9, @, -, _ and .';
      progressBar.value = 0;
    }
    return false;
  } else {
    var progressBarValue = 0;
    if (upperCase) {
      document.getElementById("upper-case").innerHTML =
        '<span style="color:green;">&#10004;</span>&nbsp;1 upper-case letter';
      progressBar.value = progressBarValue += 1;
    }
    if (lowerCase) {
      document.getElementById("lower-case").innerHTML =
        '<span style="color:green;">&#10004;</span>&nbsp;1 lower-case letter';
      progressBar.value = progressBarValue += 1;
    }
    if (number) {
      document.getElementById("number").innerHTML =
        '<span style="color:green;">&#10004;</span>&nbsp;1 number';
      progressBar.value = progressBarValue += 1;
    }
    if (length) {
      document.getElementById("length").innerHTML =
        '<span style="color:green;">&#10004;</span>&nbsp;8 or more characters';
      progressBar.value = progressBarValue += 1;
    }
  }
}

function register() {
  if (
    document.getElementById("email").value ===
      document.getElementById("verify-email").value &&
    document.getElementById("password").value ===
      document.getElementById("verify-password").value
  ) {
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
