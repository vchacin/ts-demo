"use strict";
console.log('Hola Typescript');
console.log('Adiós Typescript');
// esto es un comentario en typescript
/**
 *
 */
// Declaración de Variables:
var name = "Martin";
var edad = 11;
var apellido = "Gomez"; // La variable puede cambiar de tipo
var error;
error = false;
console.log(`Hola ${name}`);
// Instanciación múltiple de variables
let a, b, c;
a = "Hola";
b = true;
c = 11;
// Tipos mas complejos
let listaTareas = ["Tarea1", "Tarea2"];
// Combinar tipos
let valores = [false, "Hola", true, 56];
// Enumerados
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let estadoTarea = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;
// Podemos crear variables que sigan la interface Tarea. Una clase
let tarea1 = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
};
console.log(`Tarea: ${tarea1}`);
// Asignación multiple de variables
let miTarea = {
    nombre: "Tarea 2",
    estado: Estados.Pendiente,
    urgencia: 10
};
// Declaracion 1 a 1
let miNombre = miTarea.nombre;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
// Factor Spread (propagacion)
// Declaracion con factor de propagacion
// En asignacion de variables
let { nombre, estado, urgencia } = miTarea;
// En listas
let listaCompraLunes = ["leche", "huevos"];
let listaCompraMartes = [...listaCompraLunes, "pan"];
let listaCompraMiercoles = ["leche", "huevos"];
let listaCompraJueves = [...listaCompraLunes, ...listaCompraMiercoles];
// En objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer 123456"
};
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
let coche = {
    nombre: "Audi",
    precio: 1000,
    date: 2010
};
// Operadores ternarios
console.log(coche.date < 2010 ? `El coche: ${coche.nombre} es viejo` : `El coche: ${coche.nombre} es nuevo`);
// If - else
if (error) {
    console.log("Hay un error");
}
else {
    console.log("No hay un error");
}
// If - else if - else
if (coche.date < 2010) {
    console.log("El coche es viejo");
}
else if (coche.date === 2010) {
    console.log("El coche es del 2010");
}
else {
    console.log("El coche es nuevo");
}
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("Estado completo");
        break;
    case Estados.Incompleto:
        console.log("Estado incompleto");
        break;
    case Estados.Pendiente:
        console.log("Estado pendiente");
        break;
    default:
        console.log("Estado nuevo");
        break;
}
// Bucles
let listaTareasNuevas = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Incompleto,
        urgencia: 3
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Pendiente,
        urgencia: 4
    }
];
listaTareasNuevas.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
while (tarea1.estado === Estados.Pendiente) {
    if (tarea1.urgencia === 9) {
        tarea1.estado = Estados.Completado;
        break;
    }
    tarea1.urgencia++;
}
// Funciones
function myFunction(nombre) {
    console.log(nombre);
}
myFunction("Tarea 1");
