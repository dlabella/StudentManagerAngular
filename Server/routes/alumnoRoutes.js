'use strict';
 
const Router = require('express');
const alumnoRepo = require('../repositories/alumnoRepository');
 
const getAlumnoRoutes = (app) => {
    const router = new Router();
 
    router
        .get('/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = alumnoRepo.getById(id);
            res.send(result);
        })
        .get('/', (req, res) => {
            const result = alumnoRepo.getAll();
            res.send(result);
        })
        .delete('/:id', (req, res) => {
            const id = parseInt(req.params.id);
            alumnoRepo.remove(id);
            const result = 'Last alumno remove. Total count: '
                + alumnoRepo.alumnos.size;
            res.send(result);
        })
        .post('/save', (req, res) => {
            const alumno = req.body;
            const result = alumnoRepo.save(alumno);
            res.send(result);
        });
 
    app.use('/alumno', router);
};
 
module.exports = getAlumnoRoutes;