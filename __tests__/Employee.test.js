const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Dwight Schrute', 'n09052', 'dwight.schrute@dundermifflin.com');

    expect(employee.name).toBe('Dwight Schrute');
    expect(employee.id).toBe('n09052');
    expect(employee.email).toBe('dwight.schrute@dundermifflin.com');
});

test('gets employee name', () => {
    const employee = new Employee('Dwight Schrute','n09052','dwight.schrute@dundermifflin.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('gets employee Id', () => {
    const employee = new Employee('Dwight Schrute','n09052','dwight.schrute@dundermifflin.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('gets employee email', () => {
    const employee = new Employee('Dwight Schrute','n09052','dwight.schrute@dundermifflin.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    const employee = new Employee('Dwight Schrute','n09052','dwight.schrute@dundermifflin.com','Employee');

    expect(employee.role).toEqual('Employee');
});