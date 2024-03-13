function passwordInput(password) {
    if (/[a-zA-Z]\d+[!@#$ %^&*(_ +=}: "?></.~`]/.test(password)) {
        return "Strong 🟢";

    } else if (/[a-zA-Z]\d+/.test(password)) {
        return "Medium 🟡";
    } else {
        return "Weak 🔴"
    }
}





// Function to check the strength of the password
function checkPassword() {
    var password = document.getElementById("password").value;

    // Your password strength checking logic goes here

    // Example: Display the result in the result paragraph
    document.getElementById("result").textContent = passwordInput(password); // Example result
}