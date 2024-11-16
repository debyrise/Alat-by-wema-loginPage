document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('Password');
    const icon = this;

    // Toggle password visibility
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        passwordField.type = "password";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
});