'use strict';
 
const Alumno = require('../models/alumno');
 
class alumnoRepository {
    constructor() {
        this.alumnos = new Map([
            [1, new Alumno(1, "Test", "1", "46983516J", "Vallirana", [".Net"], "hombre")],
            [2, new Alumno(2, "Test", "2", "46983516J", "Vallirana", [".Net"], "hombre")],
            [3, new Alumno(3, "Test", "3", "46983516J", "Vallirana", [".Net"], "hombre")],
            [4, new Alumno(4, "Test", "4", "46983516J", "Vallirana", [".Net"], "hombre")],
        ]);
    }
 
    getById(id) {
        return this.alumnos.get(id);
    }
 
    getAll() {
        return Array.from(this.alumnos.values());
    }
 
    remove(id) {
        this.alumnos.delete(id);
    }
 
    save(alumno) {
        if (this.getById(alumno.id) !== undefined) {
            this.alumnos[alumno.id] = alumno;
            return "Updated alumno with id=" + alumno.id;
        }
        else {
            this.alumnos.set(alumno.id, alumno);
            return "Added alumno with id=" + alumno.id;
        }
    }
}
 
const alumnoRepository = new AlumnoRepository();
 
module.exports = alumnoRepository;