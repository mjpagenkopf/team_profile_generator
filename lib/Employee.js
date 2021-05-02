// const inquirer = require('inquirer');
// const fs = require('fs');
// const chalk = require('chalk');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');
// const Manager = require('./Manager');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"; //not same value as class Employee
    }
}



module.exports = Employee; //exports from one file and acquire in another file

//separation of concerns - the practice of keeping things compartmentalized (look it up)

//remember to use Super on the other classes