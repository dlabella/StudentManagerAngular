'use strict';
 
const Router = require('express');
const sexoRepo = require('../repositories/sexoRepository');
 
const getsexoRoutes = (app) => {
    const router = new Router();
 
    router
        .get('/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = sexoRepo.getById(id);
            res.send(result);
        })
        .get('/', (req, res) => {
            const result = sexoRepo.getAll();
            res.send(result);
        })
        .delete('/:id', (req, res) => {
            const id = parseInt(req.params.id);
            sexoRepo.remove(id);
            const result = 'sexo removed. Total count: '
                + sexoRepo.sexos.size;
            res.send(result);
        })
        .post('/save', (req, res) => {
            const sexo = req.body;
            const result = sexoRepo.save(sexo);
            res.send(result);
        });
 
    app.use('/sexo', router);
};
 
module.exports = getsexoRoutes;