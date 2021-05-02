const fs = require('fs');
const inquirer = require('inquirer');
const generatedTeamPage = require('./dist/generatedTeamPage');
const Employee = require('./lib/Employee');

const info = [{
    type: 'input',
    message: 'Enter your name',
    name: 'name',
}, {
    type: 'input',
    message: 'Enter your email',
    name: 'email',
}, {
    type: 'number',
    message: 'Enter employee ID',
    name: 'id',
}, {
    type: 'list',
    name: 'position',
    message: 'what is your position?',
    choices: [
        'Manager',
        'Engineer',
        'Intern',
    ]
}, {
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter your Office Number',
    when: (answers) => answers.position === 'Manager',
}, {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub Username',
    when: (answers) => answers.position === 'Engineer',
}, {
    type: 'input',
    name: 'school',
    message: 'Please enter your College or University name',
    when: (answers) => answers.position === 'Intern',
},
];
console.log(info);

function writeToFile(fileName, data) {
    fs.appendFileSync(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('success');
        };
    });
};

function init() {
    inquirer
    .prompt(info)
    .then((data) => {
        writeToFile('index.html', generatedTeamPage(data));
    });
};
init();


const employee = new Employee();

employee.getRole();









//will need three classes: manager, engineer, intern
//will all have name, id, email address
//all will have methods like getId, getName, getEmail, getRole
//all have 1 specific information unique to each
//one class is employee class that the other three classes extend the employee class