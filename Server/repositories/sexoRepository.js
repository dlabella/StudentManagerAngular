'use strict';
 
const Sexo = require('../models/sexo');
 
class SexoRepository {
    constructor() {
        this.sexos = new Map([
            [1, new Sexo(1, "Hombre")],
            [2, new Sexo(2, "Mujer")],
            [3, new Sexo(3, "Otro")]
        ]);
    }
 
    getById(id) {
        return this.sexos.get(id);
    }
 
    getAll() {
        return Array.from(this.sexos.values());
    }
 
    remove(id) {
        this.sexos.delete(id);
    }
 
    save(sexo) {
        if (this.getById(sexo.id) !== undefined) {
            this.sexos[sexo.id] = sexo;
            return "Updated sexo with id=" + sexo.id;
        }
        else {
            this.sexos.set(sexo.id, sexo);
            return "Added sexo with id=" + sexo.id;
        }
    }
}
 
const sexoRepository = new SexoRepository();
 
module.exports = sexoRepository;