'use strict';
 
const Router = require('express');
const hobbyRepo = require('../repositories/hobbyRepository');
 
const getHobbyRoutes = (app) => {
    const router = new Router();
 
    router
        .get('/:id', (req, res) => {
            const id = parseInt(req.params.id);
            const result = hobbyRepo.getById(id);
            res.send(result);
        })
        .get('/', (req, res) => {
            const result = hobbyRepo.getAll();
            res.send(result);
        })
        .delete('/:id', (req, res) => {
            const id = parseInt(req.params.id);
            hobbyRepo.remove(id);
            const result = 'Hobby removed. Total count: '
                + hobbyRepo.hobbies.size;
            res.send(result);
        })
        .post('/save', (req, res) => {
            const hobby = req.body;
            const result = hobbyRepo.save(hobby);
            res.send(result);
        });
 
    app.use('/hobby', router);
};
 
module.exports = getHobbyRoutes;