function checkPattern(password) {
    // Regular expressions to check for letters, digits, and symbols
    const letters = /[a-zA-Z]/.test(password);
    const digits = /\d/.test(password);
    const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password); // Improved regex for symbols

    // Check password strength based on criteria
    if (letters && digits && symbols && password.length >= 10) {
        return "Strong";
    } else if (letters && digits && password.length >= 5) {
        return "Medium";
    } else {
        return "Weak";
    }
}

// Run the checkPattern function when the input field value changes
document.getElementById("password").addEventListener("input", function() {
    //.value retrieves the current value entered into the password input field
    var password = document.getElementById("password").value; 
    var result = checkPattern(password); //passes password as an argument
    document.getElementById("result").innerHTML = result; //holds strength level of password based on what is defined in the check function
});


    
    
    // Your password strength checking logic goes here
    //check using pattern length
    // if (password.length <= 5) {
    //     result = "Weak"; // If password does not match the pattern (i.e., contains characters other than uppercase letters)
    // } else if (password.length <= 10 ) {
    //     result = "Medium";
    // } else {
    //     result = "Strong";
    // }

