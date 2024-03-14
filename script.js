

// Function to check the strength of the password
function checkPassword() {
    var password = document.getElementById("password").value;
   
    //insert password example using regular expression
    
    
    
    // Your password strength checking logic goes here
    //check using pattern length
    if (password.length <= 5) {
        result = "Weak"; // If password does not match the pattern (i.e., contains characters other than uppercase letters)
    } else if (password.length <= 10 ) {
        result = "Medium";
    } else {
        result = "Strong";
    }



    // Example: Display the result in the result paragraph
    document.getElementById("result").innerHTML = result; // Example result
}
