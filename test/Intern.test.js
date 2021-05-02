const Intern = require('../lib/Intern');

//testing name of Intern
test ("test to return the name on the Intern class", () => {
    const name = 'Station';
    const newEmp = new Intern(name);
    expect(newEmp.name).toBe(name);
})
//testing id of Intern
test ("test to return the id on the Intern class", () => {
    const id = 666;
    const newEmp = new Intern('Passing Name aka foo', id);
    expect(newEmp.id).toBe(id);
})
//testing email of Intern
test ("test to return the email on the Intern class", () => {
    const email = 'bodaciouscreation@gmail.com';
    const newEmp = new Intern('Station', 666, email);
    expect(newEmp.email).toBe(email);
})
//testing school of Intern
test ("test to return the school on the Intern class", () => {
    const school = 'Alien University';
    const newEmp = new Intern('Station', 666, 'bodaciouscreation@gmail.com', school);
    expect(newEmp.school).toBe(school);
})
//testing getName of Intern
test ("test to return the getName on the Intern class", () => {
    const name = 'Station';
    const newEmp = new Intern(name);
    expect(newEmp.getName()).toBe(name);
})
//testing getId of Intern
test ("test to return the getId on the Intern class", () => {
    const id = 666;
    const newEmp = new Intern('Station', id);
    expect(newEmp.getId()).toBe(id);
})
//testing getEmail of Intern
test ("test to return the getEmail on the Intern class", () => {
    const email = 'bodaciouscreation@gmail.com';
    const newEmp = new Intern('Station', 666, email);
    expect(newEmp.getEmail()).toBe(email);
})
//testing getSchool of Intern
test ("test to return the getSchool on the Intern class", () => {
    const school = 'Alien University';
    const newEmp = new Intern('Station', 666, 'bodaciouscreation@gmail.com', school);
    expect(newEmp.getSchool()).toBe(school);
})
//testing getRole of Intern?