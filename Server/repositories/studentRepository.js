'use strict';
 
const Student = require('../models/student');
 
class StudentRepository {
    constructor() {
        this.students = new Map([
            [1, new Student(1, "Test", "1", "46983516J", "Vallirana", [".Net"], "hombre")],
            [2, new Student(2, "Test", "2", "46983516J", "Vallirana", [".Net"], "hombre")],
            [3, new Student(3, "Test", "3", "46983516J", "Vallirana", [".Net"], "hombre")],
            [4, new Student(4, "Test", "4", "46983516J", "Vallirana", [".Net"], "hombre")],
        ]);
    }
 
    getById(id) {
        return this.students.get(id);
    }
 
    getAll() {
        return Array.from(this.students.values());
    }
 
    remove(id) {
        this.students.delete(id);
    }
 
    save(student) {
        if (this.getById(student.id) !== undefined) {
            this.students[student.id] = student;
            return "Updated Student with id=" + student.id;
        }
        else {
            this.students.set(student.id, student);
            return "Added Student with id=" + student.id;
        }
    }
}
 
const studentRepository = new StudentRepository();
 
module.exports = studentRepository;