

let intentos = 3;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        //bucle while
        while (intentos > 0) {
            if (email === "admin@sakura.com" && password === "123456") {
                alert("¡Bienvenido de nuevo a Sakura! 🌸");
                window.location.href = "index.html";
                return;
            } else {
                intentos--;
                if (intentos > 0) {
                    alert(`Credenciales incorrectas. Te quedan ${intentos} intento(s).`);
                } else {
                    alert("Has agotado tus intentos. Intenta más tarde.");
                    document.querySelector('.login-button').disabled = true;
                }
                return;
            }
        }
    });
});