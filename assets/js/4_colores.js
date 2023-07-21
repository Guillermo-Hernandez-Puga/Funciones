const accion1 = document.getElementById("azul")
const accion2 =document.getElementById("rojo")
const accion3 =document.getElementById("verde")
const accion4 =document.getElementById("amarillo")

accion1.addEventListener("click", function(){
    accion1.style.backgroundColor="black"
 })

accion2.addEventListener("click", function(){
   accion2.style.backgroundColor="black"
})
   
accion3.addEventListener("click", function(){
    accion3.style.backgroundColor="black"
 })
 accion4.addEventListener("click", function(){
    accion4.style.backgroundColor="black"
 })
 
 /* accion de cambio de color por letras a,s,d */
 const keydiv = document.getElementById("key");
const texto = document.getElementById("texto");

function changeColor(event) {
  console.log(event.key);
  let color = "";
  if (event.key === "a" || event.key === "A") {
    color = "pink";
  } else if (event.key === "s" || event.key === "S") {
    color = "orange";
  } else if (event.key === "d" || event.key === "D") {
    color = "skyblue";
  }
  if (color !== "") {
    keydiv.style.backgroundColor = color;
    texto.textContent = `Se asignó el color ${color} con la letra ${event.key} en el primer cuadro`;
  } else {
    texto.textContent = `La letra ${event.key} no tiene color asignado en el primer cuadro`;
  }
}

document.addEventListener("keydown", changeColor);

// Nueva función para el segundo grupo de letras
const keydiv2 = document.getElementById("key1");
const texto2 = document.getElementById("texto2");

function changeColor2(event) {
  console.log(event.key);
  let color = "";
  if (event.key === "q" || event.key === "Q") {
    color = "yellow";
    
  } else if (event.key === "w" || event.key === "W") {
    color = "blue";
   
  } else if (event.key === "e" || event.key === "E") {
    color = "brown";

  }
  if (color !== "") {
    keydiv2.style.backgroundColor = color;
    texto2.textContent = `Se asignó el color ${color} con la letra ${event.key} en segundo cuadro`;
  } else {
    texto2.textContent = `La letra ${event.key} no tiene color asignado en el segundo cuadro`;
  }
}

document.addEventListener("keydown", changeColor2);