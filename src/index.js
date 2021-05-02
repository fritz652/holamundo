// lo primero es crear las variables del HTML "LOS id"
let div = document.querySelector('#div2')
let interaccion = document.querySelector('#interaccion')
let lista = document.querySelector('#lista')

console.log(div) // console.log te muestra un texto en el terminal 

div.addEventListener('click',()=>{ // crea un evento click 
    // lo siguiente es lo que se ejecutara co nel evento click 
    console.log('hola mundo');
    console.log(interaccion)
    let newdiv = document.createElement('div')
    newdiv.textContent = 'hola mundo'
    interaccion.appendChild(newdiv)
})
// faltaria el paso previo de traer los datos desde la base de datos
let datos = ['uno', 'dos' , 'tres' ,'cuatro' , 'cinco'] // esto es un array o una lista 
console.log(datos);
console.log(datos[0])
console.log(datos[1])
console.log(datos[2])

 // primero probamos un metodo estatico 
let newdiv1 = document.createElement('div')
newdiv1.textContent = datos[0]
interaccion.appendChild(newdiv1)  // copiar de manera rapida , seleccionar el text y presionar shit alt + flecha abajo 

let newdiv2 = document.createElement('div')
newdiv2.textContent = datos[1]
interaccion.appendChild(newdiv2)

let newdiv3 = document.createElement('div')
newdiv3.textContent = datos[2]
interaccion.appendChild(newdiv3)


// ahora probamos un metodo dinamico , no depende de la cantidad de datos 
for (const valor of datos) {
    let newdiv1 = document.createElement('div')
    newdiv1.textContent = valor
    interaccion.appendChild(newdiv1)  // copiar de manera rapida , seleccionar el text y presionar shit alt + flecha abajo 
}




