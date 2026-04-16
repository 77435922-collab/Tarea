// registro.js - Usando do...while para validación

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registro-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirm-password').value;

        // do...while para validar que las contraseñas coincidan
        do {
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
                confirmPassword = prompt("Confirma tu contraseña nuevamente:");
                if (confirmPassword) document.getElementById('confirm-password').value = confirmPassword;
            }
        } while (password !== confirmPassword);

        alert("¡Registro exitoso! 🎉 Bienvenido a Sakura");
        setTimeout(() => window.location.href = "login.html", 1500);
    });
});