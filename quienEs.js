function jugar() {
    const numeroRandom = Math.floor(Math.random() * 300);
    obtenerPokemonPorNumero(numeroRandom);
}

function obtenerPokemonPorNumero(numero) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const nombre = data.name;
            mostrarPregunta(nombre);
            mostrarImagen(numero,nombre);
        })
        .catch(console.error('Error en obtener info, o cayo la API o algo sucedio, no me hago resposable', error));
}

function mostrarPregunta(nombre) {
    const divPreguntaPokemon = document.getElementById("preguntaPokemon");
    divPreguntaPokemon.innerHTML = "";
    const preguntaElement = document.createElement("p");
    preguntaElement.textContent = "Cual es ese Pokémon?";
    divPreguntaPokemon.appendChild(preguntaElement);
}

function mostrarImagen(numero,nombre) {
    const divImagenPokemon = document.getElementById("imagenPokemon");
    divImagenPokemon.innerHTML = "";

    const imagen = document.createElement("img");
    imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numero}.png`;
    imagen.alt = nombre;
    divImagenPokemon.appendChild(imagen);

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Escribe el nombre aquí";

    divImagenPokemon.appendChild(inputNombre);
    const botonVerificar = document.createElement("button");
    botonVerificar.textContent = "Verificar";
    botonVerificar.onclick = function () {
        verificarRespuestaConPromesa(nombre, inputNombre.value);
    };
    divImagenPokemon.appendChild(botonVerificar);
}




function verificarRespuestaConPromesa(respuestaCorrecta, respuestaUsuario) {
    return new Promise((resolve, reject) => {
        if (respuestaUsuario && respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
            Swal.fire({
                imageUrl: 'https://i.kym-cdn.com/photos/images/newsfeed/001/048/205/7c5.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                title: 'Correcto',
                text: "Correcto! El nombre es " + respuestaCorrecta + ".",
            });
            resolve();
        } else {
            Swal.fire({
                imageUrl: 'https://gifdb.com/images/high/pokemon-sad-pikachu-anime-slap-zt892ffbd96qbbb6.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                title: 'Incorrecto',
                text: "Incorrecto. El nombre correcto es " + respuestaCorrecta + ". Inténtalo de nuevo clicando en JUGAR.",
            });
            reject();
        }
    });
}



