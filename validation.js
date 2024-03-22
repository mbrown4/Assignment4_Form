function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirm_password").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var ageGroup = document.getElementById("age_group").value;
    var musicGenre = document.querySelectorAll('input[name="music_genre[]"]:checked');
    var errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    var isValid = true;

    // Validation for username
    if (username === "") {
        isValid = false;
        errorMessages.innerHTML += "<p class='error'>Please Enter <span style='color: red'>Username</span></p>";
    } else if (!/^[a-z0-9]{4,12}$/.test(username)) {
		//isValid = false;
		errorMessages.innerHTML += "<p class='invalid'>Please Enter <span style='color: orange'> a valid Username</span></p>";
	}

    // Validation for email
    if (email === "") {
        isValid = false;
        errorMessages.innerHTML += "<p class='error'>Please Enter <span style='color: red'>Email</span></p>";
    } else if (!/^\S+@\S+\.(net|com|org|edu)$/.test(email)) {
        isValid = false;
        errorMessages.innerHTML += "<p class='invalid'>Please Enter <span style='color: orange'>a Valid Email</p>";
    }

    // Validation for phone number
    if (phone === "") {
        isValid = false;
        errorMessages.innerHTML += "<p class='error'>Please Enter <span style='color: red'>Phone Number</span></p>";
    } else if (!/^\(\d{3}\)-\d{3}-\d{4}$/.test(phone)) {
        isValid = false;
        errorMessages.innerHTML += "<p class='invalid'>Please Enter<span style='color: orange'> a Valid Phone Number</p>";
    }

    // Validation for password
    if (password === "") {
        isValid = false;
        errorMessages.innerHTML += "<p class='error'>Please Enter <span style='color: red'>Password</span></p>";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/.test(password)) {
        isValid = false;
        errorMessages.innerHTML += "<p class='invalid'>Please Enter <span style='color: orange'>a Valid Password</span></p>";
    }

    // Validation for confirm password
    if (confirmPassword === "") {
        isValid = false;
        errorMessages.innerHTML += "<p class='error'>Please Enter <span style='color: red'>Confirm Password</span></p>";
    } else if (password !== confirmPassword) {
        isValid = false;
        errorMessages.innerHTML += "<p class='invalid'>Passwords Do Not Match</p>";
    }

    // Validation for gender
    if (!gender) {
        isValid = false;
        errorMessages.innerHTML += "<p class='error'>Please Select <span style='color: red'>Gender</span></p>";
    }

    // Validation for age group
    if (ageGroup === "") {
        isValid = false;
        errorMessages.innerHTML += "<p class='error'>Please Select <span style='color: red'>Age Group</span></p>";
    }

    // Validation for music genre
    if (musicGenre.length === 0) {
        isValid = false;
        errorMessages.innerHTML += "<p class='error'>Please Select<span style='color: red'> Music Genre</span></p>";
    }
	
	// Validation for passwords matching
    if (password !== confirmPassword) {
        isValid = false;
        alert("Passwords do not match");
    }

    return isValid;
}
