if(!sessionStorage.getItem("nombre")){
    Window.location = "/ingreso.html"
}


const listaNegra = ["Bobo","Tonto","Apestoso","Banana"];


function validarUser() {
    var nombre = document.getElementById("inputNombre").value;
    var apellido = document.getElementById("inputApellido").value;
    var edad = parseFloat(document.getElementById("inputEdad").value);

    if (edad < 18) {
        alert("Por favor ingrese una edad valida!");
        return false;
    } else if (nombre === "" || apellido === "") {
        alert("Ingrese un dato en el nombre o apellido");
        return false;
    } else if (listaNegra.includes(nombre)){
            alert("Nombre no permitido!!" )
    } else {
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("apellido", apellido);
        alert("Bienvenido " + nombre);
        
        window.location.href = "index.html";

        return false; 
    }
}

var nombreStorage = localStorage.getItem("nombre")
var apellidoStorage = localStorage.getItem("apellido")
var bienvenidoDiv = document.getElementById("bienvenida")
bienvenidoDiv.textContent+= "Hola " + nombreStorage +" "+  apellidoStorage;

function cambiarUser(){
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");

    window.location.href = "ingreso.html"

}