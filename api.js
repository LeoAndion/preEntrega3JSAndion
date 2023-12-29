const contadorElemento = document.getElementById("contador");
const pkmnApiElemento = document.getElementById("pkmnAPI");
        let contador = 0;

      
        async function obtenerInfoAPI(numero) {
            
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
                const data = await response.json();
                return {
                    nombre: data.name,
                    imagen: data.sprites.front_shiny
                };
            } catch (err) {
                console.error("Si llegas al error por clicks te queres matar", err);
                return null;
            }
        }

        async function incrementarContador() {
            contador++;
            contadorElemento.textContent = contador;
            const infoPokemon = await obtenerInfoAPI(contador);
            if (infoPokemon) {
                console.log("Nombre: ${infoPokemon.nombre}, Imagen: ${infoPokemon.imagen}");
               
                pkmnApiElemento.innerHTML = `
                    <p>Nombre: ${infoPokemon.nombre}</p>
                    <img src="${infoPokemon.imagen}" alt="${infoPokemon.nombre}">
                `;
            }
        } 
        document.addEventListener("click", incrementarContador);
