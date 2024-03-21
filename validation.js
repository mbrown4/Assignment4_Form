    function validateForm() {
        const usernameInput = document.forms["registrationForm"]["username"].value;
        const usernameError = document.querySelector('#username + .error');

        var isValid = true;
        
        // Validation for username
         if (username.length < 4 || username.length > 12 || !/^[a-z0-9]+$/.test(username)) {
            document.getElementById("usernameError").textContent = "Invalid username";
            isValid = false;
        } else {
            document.getElementById("usernameError").textContent = "";
        }
        
        // Validation for email
        if (!/^\S+@\S+\.(net|com|org|edu)$/.test(email)) {
            document.getElementById("emailError").textContent = "Invalid email";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        return isValid;
    }