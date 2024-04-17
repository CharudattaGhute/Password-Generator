function generate() {
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const number = document.getElementById("number").checked;
  const specialcharacter = document.getElementById("specialcharacter").checked;

  let characters = "";
  if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (number) characters += "0123456789";
  if (specialcharacter) characters += "!@#$%^&*()";

  let password = "";
  for (let i = 0; i < Number(length); i++) {
    let charcode = Math.floor(Math.random() * characters.length);
    password += characters[charcode];
    console.log(password);
  }

  document.getElementById("showpassword").value = password;
  document.getElementById("showpassword").readOnly = true;

  if (Number(length) < 8) {
    document.getElementById("colorstrngth").innerHTML = "Password is weak";
    document.getElementById("colorstrngth").style.backgroundColor = "green";
  } else {
    document.getElementById("colorstrngth").innerHTML = "Password is stronger";
    document.getElementById("colorstrngth").style.backgroundColor = "orange";
  }

  return false;
}
