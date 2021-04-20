const Employee = require('../classes/Employee');

test ("test to return the name on the Employee class", () => {
    const name = "Melvin";
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
})

test ("test to return the id on the Employee class", () => {
    const id = 1234;
    const newEmp = new Employee('Passing Name aka foo', id);
    expect(newEmp.id).toBe(id);
})

test ("test to return the email on the Employee class", () => {
    const email = 'placeholder@gmail.com';
    const newEmp = new Employee('Passing Name aka foo', 666, email);
    expect(newEmp.email).toBe(email);
})

test ("test to return the getName on the Employee class", () => {
    const name = "Melvin";
    const newEmp = new Employee(name);
    expect(newEmp.getName()).toBe(name);
})

test ("test to return the getId on the Employee class", () => {
    const id = 1234;
    const newEmp = new Employee('Passing Name aka foo', id);
    expect(newEmp.getId()).toBe(id);
})

test ("test to return the getEmail on the Employee class", () => {
    const email = 'placeholder@gmail.com';
    const newEmp = new Employee('Passing Name aka foo', 666, email);
    expect(newEmp.getEmail()).toBe(email);
})
