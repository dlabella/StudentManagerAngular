'use strict';
 
const Student = require('../models/student');
 
class HobbyRepository {
    constructor() {
        this.hobbies = new Map([
            [1, new Hobby(1, ".Net")],
            [2, new Hobby(2, "Node JS")],
            [3, new Hobby(3, "Cookies")],
            [4, new Hobby(4, "AWS")],
        ]);
    }
 
    getById(id) {
        return this.hobbies.get(id);
    }
 
    getAll() {
        return Array.from(this.hobbies.values());
    }
 
    remove(id) {
        this.hobbies.delete(id);
    }
 
    save(hobby) {
        if (this.getById(hobby.id) !== undefined) {
            this.hobbies[hobby.id] = hobby;
            return "Updated hobby with id=" + hobby.id;
        }
        else {
            this.hobbies.set(hobby.id, hobby);
            return "Added hobby with id=" + hobby.id;
        }
    }
}
 
const hobbyRepository = new HobbyRepository();
 
module.exports = hobbyRepository;