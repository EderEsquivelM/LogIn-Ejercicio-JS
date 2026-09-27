document.addEventListener("DOMContentLoaded", () => {
    
    const btnLogin = document.getElementById("btn-login");
    const inputUsuario = document.getElementById("usuario");
    const inputPsw = document.getElementById("psw");

    const errorUsuario = document.getElementById("error-usuario");
    const errorPsw = document.getElementById("error-psw");
    const errorGeneral = document.getElementById("error-general");

    btnLogin.addEventListener("click", () => {
        errorUsuario.textContent = "";
        errorPsw.textContent = "";
        errorGeneral.textContent = "";

        const usuario = inputUsuario.value.trim();
        const psw = inputPsw.value.trim();
        
        let hayError = false;

        if (usuario === "") {
            errorUsuario.textContent = "* Ingresa tu usuario";
            hayError = true;
        }

        if (psw === "") {
            errorPsw.textContent = "* Ingresa tu contraseña";
            hayError = true;
        }

        if (hayError) {
            return;
        }

        if (usuario === "bisonte" && psw === "b1s0nB0t") {
            errorGeneral.style.color = "green";
            errorGeneral.textContent = "Iniciando sesión...";
            
        } else {
            errorGeneral.style.color = "#ff3333";
            errorGeneral.textContent = "* Usuario o contraseña incorrectos";
        }
    });
});