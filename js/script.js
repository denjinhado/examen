document.getElementById("submit-button").addEventListener("click", function() {
    this.disabled = true;

    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var email = emailInput.value.trim();

    if (email === "") {
        emailError.textContent = "Please Enter an E-Mail";
        emailInput.focus();
        this.disabled = false;
        return;
    }

    if (!validateEmail(email)) {
        emailError.textContent = "Please Enter a valid E-Mail Address";
        emailInput.focus();
        this.disabled = false;
        return;
    }
    alert("¡Correo electrónico enviado correctamente!");
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}