import { Curso } from "./curso";

export class Estudiante {

    // Propiedades de la clase
    nombre: string;
    apellido?: string;
    cursos: Curso[];

    // Encapsulado en la clase. Para acceder hay que utilizar un método para setear o cambiar.
    private ID: string = "123"

    // Constructor
    constructor(nombre: string, cursos: Curso[], apellido?: string) {
        this.nombre = nombre;
        if (apellido) this.apellido = apellido;
        this.cursos = cursos;
    }

    get horasEstudiadas (): number {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso: Curso) => {
            horasEstudiadas += Curso.horas;
        })
        return horasEstudiadas;
    }



}