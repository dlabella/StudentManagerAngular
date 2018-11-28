'use strict';
 
const Router = require('express');
const studentRepo = require('../repositories/studentRepository');
 
const getStudentRoutes = (app) => {
    const router = new Router();
 
    router
        .get('/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = studentRepo.getById(id);
            res.send(result);
        })
        .get('/', (req, res) => {
            const result = studentRepo.getAll();
            res.send(result);
        })
        .delete('/:id', (req, res) => {
            const id = parseInt(req.params.id);
            studentRepo.remove(id);
            const result = 'Last student remove. Total count: '
                + studentRepo.students.size;
            res.send(result);
        })
        .post('/save', (req, res) => {
            const student = req.body;
            const result = studentRepo.save(student);
            res.send(result);
        });
 
    app.use('/student', router);
};
 
module.exports = getStudentRoutes;