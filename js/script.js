function showPasswordRequirements() {
  document.getElementById("password-requirement-text").style.display = "block";
  document.getElementById("invalid-password").style.display = "none";
}

function hidePasswordRequirements() {
  document.getElementById("password-requirement-text").style.display = "none";
  document.getElementById("invalid-password").style.display = "block";
}

function verifyPassword() {
    document.getElementById("password-requirement-text").style.display = "none";
    document.getElementById("invalid-password").style.display = "none";
}

function register() {
  alert("Thank you for registering!");
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
