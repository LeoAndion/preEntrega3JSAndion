
var vidita= null;

function Luchar() {
    const selector1 = document.getElementById("selector1");
    const selector2 = document.getElementById("selector2");
    const informacionPokemon1 = document.getElementById("informacionPokemon1");
    const informacionPokemon2 = document.getElementById("informacionPokemon2");

    const nombrePokemon1 = selector1.value;
    const nombrePokemon2 = selector2.value;
    panelData.innerHTML = "";

    if (nombrePokemon1 && nombrePokemon2) {
       
        const imagenPokemon1 = pokemones[nombrePokemon1].imagenURL;
        const imagenPokemon2 = pokemones[nombrePokemon2].imagenURL;

        informacionPokemon1.innerHTML = `<img src="${imagenPokemon1}" alt="${nombrePokemon1}" style="width: 100px;">`;
        informacionPokemon2.innerHTML = `<img src="${imagenPokemon2}" alt="${nombrePokemon2}" style="width: 100px;">`;
        document.getElementById("btnPkmn").style.display = "block";
    } else {
        panelData.innerHTML = "Falta seleccionar un Pokemon";
        
    }
}

var vidita= 100;
function atacar() {
    const selector1 = document.getElementById("selector1");
    const selector2 = document.getElementById("selector2");
    const informacionPokemon1 = document.getElementById("informacionPokemon1");
    const informacionPokemon2 = document.getElementById("informacionPokemon2");
    const panelData = document.getElementById("panelData");

    const nombrePokemon1 = selector1.value;
    const nombrePokemon2 = selector2.value;
    const vidaPokemon2 = pokemones[nombrePokemon2].defensa;
    const ataquePokemon1 = pokemones[nombrePokemon1].ataque;

    if (nombrePokemon1 && nombrePokemon2) {

        const vidaPokemon2 = pokemones[nombrePokemon2].defensa;
    const ataquePokemon1 = pokemones[nombrePokemon1].ataque;
        let vidaRestante = vidaPokemon2-ataquePokemon1;
        vidita = vidaRestante;
      

        if (vidita <= 0) {
            panelData.innerHTML = `<p>${nombrePokemon2} se canso y se fue a mimir.</p>`;
            document.getElementById("btnPkmn").style.display = "none";
        } else {
            panelData.innerHTML = `<p>${nombrePokemon2} quedo con ${vidaRestante} de vida.</p>`;
        }

        
        setTimeout(function () {
            panelData.innerHTML = "Que desea hacer ahora? ";
        }, 3000);
       
        
    } else {
        panelData.innerHTML = "<p>Debes seleccionar un pokemon!</p>";
    }
}
 

function huir() {
    const selector1 = document.getElementById("selector1");
    const selector2 = document.getElementById("selector2");
    const informacionPokemon1 = document.getElementById("informacionPokemon1");
    const informacionPokemon2 = document.getElementById("informacionPokemon2");
    const panelData = document.getElementById("panelData");

    const nombrePokemon1 = selector1.value;
    const nombrePokemon2 = selector2.value;

    if (nombrePokemon1 && nombrePokemon2) {
        const velocidadPokemon1 = pokemones[nombrePokemon1].velocidad;
        const velocidadPokemon2 = pokemones[nombrePokemon2].velocidad;

        if (velocidadPokemon1 < velocidadPokemon2) {
            panelData.innerHTML = "No puedes huir "+nombrePokemon1+ " anda re lento";
        } else {
            panelData.innerHTML = "Has escapado con exito!";
            document.getElementById("btnPkmn").style.display = "none"; 
            setTimeout(function () {
                panelData.innerHTML = "Gracias por jugar";
            }, 3000);
        }

        
    } 
}