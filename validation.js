document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    function validateForm() {
        const usernameInput = document.getElementById('username');
        const usernameError = document.querySelector('#username + .error');
        
        // Reset previous error messages
        usernameError.textContent = '';
        
        // Check if the username field is empty
        if (usernameInput.value.trim() === '') {
            printErrorMessage('Username', 'red');
            return false;
        }
        
        // Check if the username is valid (contains only lowercase letters or numbers)
        if (!/^[a-z0-9]{4,12}$/.test(usernameInput.value)) {
            printErrorMessage('Username', 'orange');
            return false;
        }
        
        // If all checks pass, return true to submit the form
        return true;
    }
    
    function printErrorMessage(fieldName, color) {
        const errorMessage = document.createElement('span');
        errorMessage.textContent = `${fieldName} field is not valid`;
        errorMessage.style.color = color;
        const field = document.querySelector(`label[for="${fieldName.toLowerCase()}"] + input`);
        field.parentNode.appendChild(errorMessage);
    }
    
    form.addEventListener('submit', function(event) {
        // Prevent form submission if validation fails
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});