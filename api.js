const contadorElemento = document.getElementById("contador");
        let contador = 0;

        function incrementarContador() {
            contador++;
            contadorElemento.textContent = contador;
        }
        document.addEventListener("click", incrementarContador);
