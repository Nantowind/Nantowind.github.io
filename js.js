window.onload = inicio;
var imagenBool = true;
function inicio() {
  document.getElementById("encriptar").addEventListener("click", encriptar);

  document
    .getElementById("Desencriptar")
    .addEventListener("click", desencriptar);

  document.getElementById("copiar").addEventListener("click", copiar);
}

function eliminarImg() {
  var textoLleno = document.getElementById("textarea").value;
  if (imagenBool && textoLleno != "") {
    var cont = document.getElementById("InteriorRectangulo");
    cont.remove(InteriorRectangulo);

    imagenBool = false;
  }
}

function encriptar() {
  var checkeo = document.getElementById("checkbox").checked;
  var remplazo = document.getElementById("textarea").value;
  var bool = esValido(remplazo);

  if (checkeo && bool) {
    remplazo = remplazo.replace(/e/g, "enter");
    remplazo = remplazo.replace(/i/g, "imes");
    remplazo = remplazo.replace(/a/g, "ai");
    remplazo = remplazo.replace(/o/g, "ober");
    remplazo = remplazo.replace(/u/g, "ufat");
    eliminarImg();

    document.getElementById("parrafo").innerHTML = remplazo;
  } else {
    alert("Solo letras minúsculas y sin acentos");
  }
}

function desencriptar() {
  var checkeo = document.getElementById("checkbox").checked;
  var remplazo = document.getElementById("textarea").value;
  var bool = esValido(remplazo);

  if (checkeo && bool) {
    remplazo = remplazo.replace(/enter/g, "e");
    remplazo = remplazo.replace(/imes/g, "i");
    remplazo = remplazo.replace(/ai/g, "a");
    remplazo = remplazo.replace(/ober/g, "o");
    remplazo = remplazo.replace(/ufat/g, "u");
    eliminarImg();
    document.getElementById("parrafo").innerHTML = remplazo;
  } else {
    alert("Solo letras minúsculas y sin acentos");
  }
}

function copiar() {
  // Crea un campo de texto "oculto", este por un textarea

  var aux = document.createElement("textarea");

  // Asigna el contenido del elemento especificado al valor del campo
  // este para vaciar el contenido

  aux.innerHTML = document.getElementById("parrafo").innerHTML;

  // Añade el campo a la página
  document.body.appendChild(aux);

  // Selecciona el contenido del campo
  aux.select();

  aux.setSelectionRange(0, 999999);
  // Copia el texto seleccionado
  document.execCommand("copy");

  // Elimina el campo de la página
  document.body.removeChild(aux);
}

function esValido(c) {
  c = c.charCodeAt(0);
  return (c >= 97 && c <= 122) || c == 32; // [a-z ]
}
