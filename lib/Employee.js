class Employee {
    constructor(name, id, email, role = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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
        //if statement shorthand turnary operator to return employee if none is selected
        return this.role == '' ? 'Employee' : this.role;
    }
}

module.exports = Employee;