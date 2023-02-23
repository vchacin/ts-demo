import { deleteCookie, getCookieValue, setCookie } from 'cookies-utils';
import { Curso } from './models/curso';
import { Estudiante } from './models/estudiante';

console.log('Hola Typescript');
console.log('Adiós Typescript');

// esto es un comentario en typescript


//  --------- Sintaxis, variables y estructuras de control ---------

// Declaración de Variables:

var name: string = "Martin";
var edad: number = 11;
var apellido: any = "Gomez"; // La variable puede cambiar de tipo

var error: boolean;
error = false;

console.log(`Hola ${name}`);

// Instanciación múltiple de variables

let a: string, b:boolean, c: number;
a = "Hola";
b = true;
c = 11;

// Tipos mas complejos

let listaTareas: string[] = ["Tarea1", "Tarea2"];

// Combinar tipos

let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

// Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo" = 2,
    "Tercero" = 3
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo

// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// Podemos crear variables que sigan la interface Tarea. Una clase

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1}`);

// Asignación multiple de variables

let miTarea: Tarea = {
    nombre: "Tarea 2",
    estado: Estados.Pendiente,
    urgencia: 10
}

// Declaracion 1 a 1

let miNombre = miTarea.nombre;
let miEstado = miTarea.estado;  
let miUrgencia = miTarea.urgencia;


// Factor Spread (propagacion)
// Declaracion con factor de propagacion

// En asignacion de variables
let {nombre, estado, urgencia} = miTarea;

// En listas
let listaCompraLunes: string[] = ["leche", "huevos"]
let listaCompraMartes: string[] = [...listaCompraLunes, "pan"]
let listaCompraMiercoles: string[] = ["leche", "huevos"]
let listaCompraJueves: string[] = [...listaCompraLunes, ...listaCompraMiercoles]

// En objetos

let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer 123456"
}

let nuevoEstado = {
    ...estadoApp,
    session: 4
}

// Types de Typescript mas complejos, tipos de datos

type Producto = {
    precio: number,
    nombre: string,
    date: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 1000,
    date: 2010
}

// Operadores ternarios

console.log(coche.date < 2010 ? `El coche: ${coche.nombre} es viejo` : `El coche: ${coche.nombre} es nuevo`);

// If - else

if(error){
    console.log("Hay un error");
} else {
    console.log("No hay un error");
}

// If - else if - else

if(coche.date < 2010){
    console.log("El coche es viejo");
} else if (coche.date === 2010 ){
    console.log("El coche es del 2010");
} else {
    console.log("El coche es nuevo");
}

switch(tarea1.estado) {
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

let listaTareasNuevas: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Pendiente,
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
]

listaTareasNuevas.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`);
    }
)

// while (tarea1.estado === Estados.Pendiente) {
//     if (tarea1.urgencia === 9) {
//         tarea1.estado = Estados.Completado;
//         break;
//     }
//     tarea1.urgencia++;
// }

//  --------- Funciones ---------

/**
 * Funcion que muestra una tarea por consola
 */

function myFunction (nombre: string) {
    console.log(`Esta es la tarea: ${nombre}`);
    return nombre;
}

myFunction("Tarea 1");


/**
 * Funcion que muestra un saludo por consola
 * @param nombre Nombre de la persona
 */ 

function saludarPersona(nombre: string) {
    console.log(`Hola, ${nombre}`);
}

saludarPersona("Victoria");

/**
 * Funcion que muestra un adios por consola
 * @param nombre Nombre de la persona a despedir, por defecto sera "Pepe"
 */ 

function despedirPersona(nombre: string = "Pepe") {
    console.log(`Adios, ${nombre}`);
}

despedirPersona(); // Adios, Pepe
despedirPersona("Victoria"); // Adios, Victoria

/**
 * Funcion que muestra un adios por consola
 * @param nombre Nombre de la persona a despedir, por defecto sera "Pepe"
 */ 

// function despedidaOpcional(nombre: string | "") {
function despedidaOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Adios, ${nombre}`);
    } else {
        console.log(`Adios`);
    }
}

despedidaOpcional(); // Adios
despedidaOpcional("Victoria"); // Adios, Victoria

/**
 * Funcion que recibe varios parametros
 * @param nombre Nombre de la persona a despedir, por defecto sera "Pepe"
 */ 

function variosParametros(nombre: string, apellido?: string, edad: number = 18) {
    if (apellido) {
        console.log(`${nombre} ${apellido} tiene ${edad} años`);
    } else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}

variosParametros("Victoria"); // Victoria tiene 18 años
variosParametros("Victoria", "Chacin"); // Victoria Chacin tiene 18 años
variosParametros("Victoria", undefined, 26); // Victoria tiene 26 años
variosParametros("Victoria", "Chacin", 26); // Victoria Chacin tiene 26 años

function variosTipos(a: string | number) {
    if (typeof a === "string") {
        console.log(`A es un string: ${a}`);
    } else if (typeof a === "number") {
        console.log(`A es un numero: ${a}`);
    } else {
        console.log("A no es un string ni un numero");
        throw new Error('A no es un string ni un numero');
    }
}

variosTipos("Hola");
variosTipos(12);


// Indicar de forma explicita lo que recibo de vuelta

/**
 * Funcion que devuelve el tipo especificado string
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre de la persona
 */
// function ejemploReturn(nombre: string, apellidos: string) : string | number {
function ejemploReturn(nombre: string, apellidos: string) : string {
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Victoria", "Chacin");

console.log(nombreCompleto); // Victoria Chacin
console.log(ejemploReturn("Victoria", "Chacin")); // Victoria Chacin

/**
 * Funcion que devuelve el tipo especificado void (no tiene return)
 * @param nombres es una lista de nombres
 */

function ejemploMultiParams (...nombres: string[]) : void {
    nombres.forEach(
        (nombre: string) => {
            console.log(`Este nombre es: ${nombre}`);
        }
    )
}

ejemploMultiParams("Victoria", "Maria", "Jose");

const lista = ["Paul", "George", "Ringo"];
ejemploMultiParams(...lista);

// Pasar un array como argumento significa pasar una referencia al array original, mientras que utilizar el spread operator significa pasar una copia del array a la función.

function ejemploParamLista (nombres: string[]) {
    nombres.forEach(
        (nombre: string) => {
            console.log(`Este nombre es: ${nombre}`);
        }
    )
}

ejemploParamLista(lista);

// Arrow function

// Creo mis propias clases / objetos sin necesidad de crear una instancia

type Empleado = {
    nombre: string,
    apellido: string,
    edad: number
}

let empleadoVictoria = {
    nombre: "Victoria",
    apellido: "Chacin",
    edad: 26
}

// const mostrarEmpleado = (empleado: any) => {
//     `${empleado.nombre}, ${empleado.apellido} tiene ${empleado.edad}`;
// }

const mostrarEmpleado = (empleado: Empleado) : void => {
    `${empleado.nombre}, ${empleado.apellido} tiene ${empleado.edad}`;
}

mostrarEmpleado(empleadoVictoria);

const datosEmpleados = (empleado: Empleado) : string => {
    if (empleado.edad > 70){
        return `Empleado: ${empleado.nombre} está en edad de jubilación`;
    } else {
        return `Empleado: ${empleado.nombre} está en edad laboral`;
    }
}

datosEmpleados(empleadoVictoria);

const obtenerSalario = (empleado: Empleado, cobrar: (nombre: string) => string ) => {
    if (empleado.edad > 70){
        return
    } else {
        cobrar(empleado.nombre); // callback a ejecutar
    } 
}

const cobrarSalario = (nombre: string) : string => {
    console.log (`Cobrar nomina de empleado: ${nombre}` );
    return "Cobrar nomina de empleado"
}

obtenerSalario(empleadoVictoria, cobrarSalario);
obtenerSalario(empleadoVictoria, () => 'Cobrar empleado');

// Async Functions

// async function ejemploAsync(): Promise<void> {
// Promesa del tipo generico <T>
async function ejemploAsync(): Promise<string> {
    // Await
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones");
    console.log("Tarea completada")
    return "Completado"
}

ejemploAsync()
    .then((respuesta) => {
        console.log(`Respuesta: ${respuesta}`);
    }).catch((err) => {
        console.log(`Error: ${err}`);
    }).finally(() => {
        console.log("Fin del programa");
    })

// Generator functions

function* ejemploGenerator() {
    // yield --> para emitir valores

    let index = 0;

    while (index < 5){
        // Emitimos un valor incrementado
        yield index++;
    }

}

// Guardamos la funcion generadora en una variables

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos;

console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3

// Worker

function* watcher(valor: number){

    yield valor; // emitimos el valor inicial
    yield* worker(valor); // llamamos a las emiciones del worker para los otros valores
    yield valor + 4; // emitimos el valor final + 4
}

function* worker(valor: number){
    yield valor + 1; 
    yield valor + 2; 
    yield valor + 3; 
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0
console.log(generatorSaga.next().value); // 1 del worker
console.log(generatorSaga.next().value); // 2 del worker
console.log(generatorSaga.next().value); // 3 del worker
console.log(generatorSaga.next().value); // 4 del watcher

// LocalStorage

// const saveLocalStorage = (key: string, value: any): void => {
//     localStorage.set("nombre", "Victoria")
// }

// const getLocalStorage = (): void => {
//     let nombre = localStorage.get("nombre")
// }

const cookieOptions = {
    name: "Nombre",
    value: "Victoria",
    expires: new Date(2099, 10, 1),
    path: "/"
}

setCookie(cookieOptions);
let getCookie = getCookieValue("Nombre");
deleteCookie("Nombre");

// Clase Temporizador

class Temporizador {

    public terminar?: (tiempo: number) => void;

    public empezar(): void {
        setTimeout( () => {
            if(!this.terminar) return;
            this.terminar(Date.now());
        }, 1000)
    }
}

const miTemporizador: Temporizador = new Temporizador();

miTemporizador.terminar = (tiempo: number) => {
    console.log("Evento terminado en:" + tiempo);
}

miTemporizador.empezar();

setInterval(() => console.log("Tic"), 1000);

delete miTemporizador.terminar;

document.getElementById("btn-login").addEventListener("click", () => {
    console.log("Inicio");
})



const cursoTS: Curso = new Curso("Typescript", 15)
const cursoJS: Curso = new Curso("Javascript", 20)

const listaCursos: Curso[] = [];

const victoria: Estudiante = new Estudiante("Victoria", listaCursos, "Chacin");

console.log(`${victoria.nombre} - ${victoria.apellido}`);

// Saber la instancia de un objeto/variable

// -TypeOf
// -InstanceOF

victoria.horasEstudiadas;