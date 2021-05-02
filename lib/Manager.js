class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
    // getOfficeNumber() {
    //     return this.officeNumber;np
    // }
    getRole() {
        return "Manager"; //not same value as class Manager
    }
}

module.exports = Manager;