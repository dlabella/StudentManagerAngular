'use strict';
 
const Sexo = require('../models/sexo');
 
class SexoRepository {
    constructor() {
        this.sexos = new Map([
            [1, new Student(1, "hombre")],
            [2, new Student(2, "mujer")],
        ]);
    }
 
    getById(id) {
        return this.sexos.get(id);
    }
 
    getAll() {
        return Array.from(this.sexos.values());
    }
}
 
const sexoRepository = new SexoRepository();
 
module.exports = sexoRepository;