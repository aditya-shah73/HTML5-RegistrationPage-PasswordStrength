function showPasswordRequirements() {
  document.getElementById("password-requirements").style.display = "block";
  document.getElementById("invalid-password").style.display = "none";
  document.getElementById("password-strength").style.display = "none";
}

function hidePasswordRequirements() {
  document.getElementById("password-requirements").style.display = "none";
  document.getElementById("invalid-password").style.display = "block";
  document.getElementById("password-strength").style.display = "none";
}

function verifyPassword() {
  document.getElementById("password-requirements").style.display = "none";
  document.getElementById("invalid-password").style.display = "none";
  document.getElementById("password-strength").style.display = "block";
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
