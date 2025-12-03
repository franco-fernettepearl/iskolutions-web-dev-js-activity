function validateform() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "") {
        alert("Username cannot be empty.");
        return false;
    }

    if (password.trim() === "") {
        alert("Password cannot be empty.");
        return false;
    }

    if (username.trim() === "omlingo" && password.trim() === "pupt") {
      return true;
    }
}