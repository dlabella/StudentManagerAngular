export class Student {
    id: string;
    nombre: string;
    apellidos: string;
    dni: string;
    poblacion: string;
    hobbies: Array<string>;
    sexo: string;

    constructor (
        id: string,
        nombre: string,
        apellidos: string,
        dni: string,
        poblacion: string,
        hobbies: Array<string>,
        sexo: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.poblacion = poblacion;
        this.hobbies = hobbies;
        this.sexo = sexo;
    }
}
