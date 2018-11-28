'use strict';
 
class Student {
    constructor(id, nombre, apellidos, dni, poblacion, hobbies, sexo) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.poblacion = poblacion;
        this.hobbies = hobbies;
        this.sexo = sexo;
    }
}
 
module.exports = Student;
    