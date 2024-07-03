
let nombre = prompt("Por favor ingresa su nombre")
alert ("Bienvenido" + " " + nombre + "!");
console.log("hola" + " " + nombre)

let artista = prompt("¿Desea comprar entradas para concierto de 'taylor swift' o de 'metallica'?")

while (artista != "taylor swift" && artista != "metallica"){
    alert("Porfavor ingrese una respuesta correcta")
    artista = prompt("Desea comprar entradas para concierto de taylor swift o de metallica")
}

console.log(nombre + " " + "comprara entradas para " + " " + artista)

if(artista == "metallica"){
    let edad = Number(prompt("Porfavor indique su edad")) 
    if(edad >= 18){
        let cantidadentradas1 = prompt("La entrada cuesta un total de $50.000 ¿Cuantas entradas desea comprar?")
        let montototal = `${cantidadentradas1*50000}`
        alert("El monto total a pagar es de =" + " " + "$" + montototal)
        console.log(nombre + " " + "comprara un total de" + " " + cantidadentradas1 + " " + "entradas" + ". " +  "Debe abonar un total de" + " " + "$" + montototal)
    }else {
        alert("solo mayores de edad pueden asistir al evento, lo sentimos")
    }
}

if(artista == "taylor swift"){
    let cantidadentradas2 = prompt("La entrada cuesta un total de $100.000 ¿Cuantas entradas desea comprar?")
        let montototal = `${cantidadentradas2*100000}`
        alert( "El monto total a pagar es de =" + " " + "$" + montototal)
        console.log(nombre + " " + "comprara un total de" + " " + cantidadentradas2 + " " + "entradas" + ". " +  "debe abonar un total de" + " " + "$" + montototal)
}

alert ("¡Gracias por su visita!")  
