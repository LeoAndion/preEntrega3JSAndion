const msjPokemon = [];
const arrayPokemon= ["Pikachu", "Charizard","Dragonite", "etc"]


class pkmn {
    constructor(nombre,tipo, ataque, defensa, velocidad,imagenURL){
        this.nombre = nombre;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa =defensa;
        this.velocidad = velocidad;
        this.imagenURL = imagenURL;
    }
}

const pokemones = {
    Bulbasur: new pkmn("Bulbasur", "Planta", 50, 50, 80,"assets/Bulbasaur.png"),
    Charmander: new pkmn("Charmander", "Fuego", 60, 40, 80,"assets/Charmander.png"),
    Pikachu: new pkmn("Pikachu", "Electrico", 50, 40, 90, "assets/Pikachu.png"),
    Snorlax: new pkmn("Snorlax", "Normal", 80, 80, 20,"assets/Snorlax.png"),
    Mailo: new pkmn("Mailo", "Roca", 30, 60, 90,"assets/Mailo.png"),
    Lala: new pkmn("Lala", "Hada", 40, 30, 110, "assets/Lala.png"),
   
};

const pokemonesJSON = JSON.stringify(pokemones);
localStorage.setItem("pokemones", pokemonesJSON);


function modificarPokemon(pokemon, idAtaque, idDefensa, idVelocidad) {
    const nuevoAtaque = parseInt(document.getElementById(idAtaque).value);
    const nuevaDefensa = parseInt(document.getElementById(idDefensa).value);
    const nuevaVelocidad = parseInt(document.getElementById(idVelocidad).value);

    const nuevaSuma = nuevoAtaque + nuevaDefensa + nuevaVelocidad;

    if (!isNaN(nuevoAtaque) && !isNaN(nuevaDefensa) && !isNaN(nuevaVelocidad) && nuevaSuma === 180) {
        const pokemonesJSON = localStorage.getItem("pokemones");
        const pokemonesObjeto = JSON.parse(pokemonesJSON);
        if (pokemonesObjeto[pokemon.nombre]) {
            pokemonesObjeto[pokemon.nombre].ataque = nuevoAtaque;
            pokemonesObjeto[pokemon.nombre].defensa = nuevaDefensa;
            pokemonesObjeto[pokemon.nombre].velocidad = nuevaVelocidad;
            localStorage.setItem("pokemones", JSON.stringify(pokemonesObjeto));

            alert("Datos modificados para " + pokemon.nombre +"\nNuevo ataquer: " + nuevoAtaque + "\nNueva defensa: " + nuevaDefensa +"\nNueva velocidad: " + nuevaVelocidad);

            return false;
        } else {
            alert("Pokemon no encontrado");
        }
    } else {
        alert("ERROR!: Ingresa valores numericos y verifica que la suma total de los 3 valores sea 180");
    }
}


 
function redirigirAModificar() {
    Swal.fire({
      title: '¿Está seguro que desea ir a modificar pokemones?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, seguro',
      cancelButtonText: 'No, no quiero'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Pagina cargada!',
          icon: 'success',
        }).then(() => {
          window.location.href = "modificar.html";
        });
      }
    });
  }

  function redirigirAJugar() {
    Swal.fire({
      title: '¿Está seguro que desea poner a luchar animales indefensos?',
      imageUrl: 'https://i.pinimg.com/originals/3c/02/8f/3c028f9ea7b1a390e71aca579b855b59.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonText: 'Sí, seguro',
      cancelButtonText: 'No, no quiero'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Pagina cargada!',
          icon: 'success',
        }).then(() => {
          window.location.href = "jugar.html";
        });
      }
    });
  }
  




        const mostrarTodoElObjeto = document.getElementById("todaLaInfoDesplegada");

        function mostrarTodosLosPokemones() {
            mostrarTodoElObjeto.innerHTML = "";

            for (const nombrePokemon in pokemones) {
                const pokemon = pokemones[nombrePokemon];
                const pokemonDiv = document.createElement("div");

                pokemonDiv.innerHTML = `
                    <h2>${pokemon.nombre}</h2>
                    <p>Tipo: ${pokemon.tipo}</p>
                    <p>Ataque: ${pokemon.ataque}</p>
                    <p>Defensa: ${pokemon.defensa}</p>
                    <p>Velocidad: ${pokemon.velocidad}</p>
                    <img src="${pokemon.imagenURL}" alt="${pokemon.nombre}">
                `;
                mostrarTodoElObjeto.appendChild(pokemonDiv);
            }
        }

        function mostrarPokemonPorTipo() {
            const selectorTipo = document.getElementById("selectorTipo");
            const tipoSeleccionado = selectorTipo.value;
            const todaLaInfoDesplegada = document.getElementById("todaLaInfoDesplegada");
    
            todaLaInfoDesplegada.innerHTML = "";
    
            if (tipoSeleccionado) {
                for (const nombrePokemon in pokemones) {
                    const pokemon = pokemones[nombrePokemon];
                    if (pokemon.tipo === tipoSeleccionado) {
                        const mensaje = `<p>${pokemon.nombre}</p>
                                         <img src="${pokemon.imagenURL}" alt="${pokemon.nombre}" width="100">`;
    
                        todaLaInfoDesplegada.innerHTML += mensaje;
                    }
                }
            } else {
                todaLaInfoDesplegada.innerHTML = "Seleccione un tipo de Pokemon valido";
            }
        }

        function mostrarArraySpread(){

            console.log(...arrayPokemon)

            //aca no me mate, disculpa si no pude elaborar algo mejor :D Espero aplicar mejor el Spread en el proyecto final
        }

        function mostrarNombreDesestructuracion(){
            todaLaInfoDesplegada.innerHTML = "";

            for (const nombrePokemon in pokemones) {
                const { nombre } = pokemones[nombrePokemon];
                todaLaInfoDesplegada.innerHTML += `<p>${nombre}</p>`;
            }
        }



        

