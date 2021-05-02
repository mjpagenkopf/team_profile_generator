const Manager = require('../lib/Manager');

//testing name of Manager
test ("test to return the name on the Manager class", () => {
    const name = "Placeholder";
    const newEmp = new Manager(name);
    expect(newEmp.name).toBe(name);
})
//testing id of Manager
test ("test to return the id on the Manager class", () => {
    const id = 1234;
    const newEmp = new Manager('Passing Name aka foo', id);
    expect(newEmp.id).toBe(id);
})
//testing email of Manager
test ("test to return the email on the Manager class", () => {
    const email = 'placeholder@gmail.com';
    const newEmp = new Manager('Passing Name aka foo', 666, email);
    expect(newEmp.email).toBe(email);
})
//testing officeNumber of Manager
test ("test to return the officeNumber on the Manager class", () => {
    const officeNumber = 999;
    const newEmp = new Manager('Passing Name aka foo', 222, 'whatev@mail.com', officeNumber);
    expect(newEmp.officeNumber).toBe(officeNumber);
})
//testing getName of Manager
test ("test to return the getName on the Manager class", () => {
    const name = "Melvin";
    const newEmp = new Manager(name);
    expect(newEmp.getName()).toBe(name);
})
//testing getId of Manager
test ("test to return the getId on the Manager class", () => {
    const id = 1234;
    const newEmp = new Manager('Melvin', id);
    expect(newEmp.getId()).toBe(id);
})
//testing getEmail of Manager
test ("test to return the getEmail on the Manager class", () => {
    const email = 'placeholder@gmail.com';
    const newEmp = new Manager('Melvin', 666, email);
    expect(newEmp.getEmail()).toBe(email);
})
//testing getOfficeNumber of Manager
// test ("test to return the getOfficeNumber on the Manager class", () => {
//     const officeNumber = 555;
//     const newEmp = new Manager('Melvin', 666, 'whatev@mail.com', officeNumber);
//     expect(newEmp.getOfficeNumber()).toBe(officeNumber);
// })

//testing getRole of Employee?