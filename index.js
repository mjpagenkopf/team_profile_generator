const fs = require('fs');
const inquirer = require('inquirer');
const { inherits } = require('util');
// const { inherits } = require('util');
// inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));
// const generatedTeamPage = require('./dist/generatedTeamPage');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

array = [];
const collectInputs = async(inputs = []) => {
    const prompts = [
        {
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
        }, {
                type:'confirm',
                name:'again',
                message:'Add another employee?',
                default: true,
            },
        ];

    const {again, ...answers} = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs): newInputs;
    
};

const main = async() => {
    const inputs = await collectInputs();
    console.log(inputs);
    // init();
    constructorToArray(inputs);
};
main();




//TO DO: give user option to exit prompt. Keep looping prompt 
function constructorToArray (data) {
    console.log(data)
    switch(data.position) {
        case 'Engineer': 
        array.push(new Engineer(data.name, data.id, data.email, data.github))
        break;
        case 'Manager':
        array.push(new Manager(data.name, data.id, data.email, data.officeNumber))
        break;
        case 'Intern':
        array.push(new Intern(data.name, data.id, data.email, data.school))
        break;
    }; 
    console.log(array);
    // init(array);
};

// function init() {
//     inquirer
//     .prompt(array)
//     .then((data) => {
//         // console.log(data)
//         var constructorArray = constructorToArray(data)
//         console.log(constructorArray);
//         // writeToFile('index.html', generatedTeamPage(data));
//     });
// };









// const employee = new Employee();

// employee.getRole();









//will need three classes: manager, engineer, intern
//will all have name, id, email address
//all will have methods like getId, getName, getEmail, getRole
//all have 1 specific information unique to each
//one class is employee class that the other three classes extend the employee class