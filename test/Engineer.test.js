const { expect } = require('@jest/globals');
const Engineer = require('../classes/Engineer');

//testing name of Engineer
test ("test to return the name on the Engineer class", () => {
    const name = "Placeholder";
    const newEmp = new Engineer(name);
    expect(newEmp.name).toBe(name);
})
//testing id of Engineer
test ("test to return the id on the Engineer class", () => {
    const id = 1234;
    const newEmp = new Engineer('Passing Name aka foo', id);
    expect(newEmp.id).toBe(id);
})
//testing email of Engineer
test ("test to return the email on the Engineer class", () => {
    const email = 'placeholder@gmail.com';
    const newEmp = new Engineer('Passing Name aka foo', 666, email);
    expect(newEmp.email).toBe(email);
})
//testing github of Engineer
test ("test to return the github on the Engineer class", () => {
    const github = undefined;
    const newEmp = new Engineer(github);
    expect(newEmp.github).toBe(github);
})
//testing getName of Engineer
test ("test to return the getName on the Engineer class", () => {
    const name = "Melvin";
    const newEmp = new Engineer(name);
    expect(newEmp.getName()).toBe(name);
})
//testing getId of Engineer
test ("test to return the getId on the Engineer class", () => {
    const id = 1234;
    const newEmp = new Engineer('Passing Name aka foo', id);
    expect(newEmp.getId()).toBe(id);
})
//testing getEmail of Engineer
test ("test to return the getEmail on the Engineer class", () => {
    const email = 'placeholder@gmail.com';
    const newEmp = new Engineer('Passing Name aka foo', 666, email);
    expect(newEmp.getEmail()).toBe(email);
})
//testing getGithub of Engineer
test ("test to return the getGithub on the Engineer class", () => {
    const github = undefined;
    const newEmp = new Engineer(github);
    expect(newEmp.getGithub()).toBe(github);
})
//testing getRole of Employee?
// test ("test to return the getRole on the Employee class", () => {ngineer